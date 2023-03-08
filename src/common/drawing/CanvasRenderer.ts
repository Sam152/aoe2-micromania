import {ClientDispatcher, ClientState, GameState, Rectangle, RendererInterface} from '../../types';
import unitMetadataFactory from '../units/unitMetadataFactory';
import {circle, square} from './shapes';
import screenManager from './screenManager';
import {Vector2} from 'three/src/math/Vector2';
import config from '../config';
import AnimationStyle from '../units/AnimationStyle';
import Grid from '../terrain/Grid';
import UnitState from '../units/UnitState';
import pointInRect from '../util/pointInRect';
import calculateUnitMovementPerTick from '../units/calculateUnitMovementPerTick';
import getArrowPosition from './helpers/getArrowPosition';
import projectileMetadata from '../units/projectileMetadata';
import ActiveCommand from '../input/ActiveCommand';
import unitsInGameState from '../util/unitsInGameState';
import DebugRenderer from './DebugRenderer';
import slpManager from "./SlpManager";
import selectionCircle from "./helpers/selectionCircle";
import assetUrl from "../../client/util/assetUrl";

export default class CanvasRenderer implements RendererInterface {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    lastRenderedGameTick: number;
    frameAtLastRenderedTick: number;
    framesPerTick: number;
    fractionOfTickRendered: number;
    private lastCursor: string | null;
    private debugRenderer: RendererInterface;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');

        this.lastRenderedGameTick = 0;
        this.frameAtLastRenderedTick = 0;
        this.fractionOfTickRendered = 0;
        this.framesPerTick = 0;

        // @ts-ignore
        window.ctx = this.context;

        this.lastCursor = null;

        this.debugRenderer = new DebugRenderer(canvas);

        this.fit();
        screenManager.onChange(this.fit.bind(this));

        // this.canvas.addEventListener('click', element => {
        //    // @ts-ignore
        //     element.target.requestPointerLock();
        // });
    }

    fit() {
        this.context.canvas.width = window.innerWidth * screenManager.getCanvasScale();
        this.context.canvas.height = (window.innerHeight - screenManager.getTopOffset()) * screenManager.getCanvasScale();
    }

    getSize(): Vector2 {
        return new Vector2(this.context.canvas.width, this.context.canvas.height);
    }

    bootUp(): Promise<void> {
        return slpManager.downloadPreRenderAll();
    }

    render(gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher): void {
        // Attempt to smooth out the rendering of game ticks, which are slower than how often a frame is rendered, by
        // calculating what fraction of a game tick we are through. This requires us to record what frame we were at
        // when a new tick is started, how many have passed since the last tick and an estimate of the total frames that
        // are rendered for each tick.
        if (gameState.ticks !== this.lastRenderedGameTick) {
            // Attempt to guess the frames per tick.
            this.framesPerTick = clientState.renderedFrames - this.frameAtLastRenderedTick;
            // Record the rendered tick and the frame we are rendering.
            this.lastRenderedGameTick = gameState.ticks;
            this.frameAtLastRenderedTick = clientState.renderedFrames;
        }
        this.fractionOfTickRendered = gameState.gameEnded ? 1 : (clientState.renderedFrames - this.frameAtLastRenderedTick) / this.framesPerTick;

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);

        this.translateCamera(clientState.camera);
        this.drawTerrain(gameState);
        this.drawFallenUnits(gameState);
        this.drawUnits(gameState, clientState, clientStateDispatcher);
        this.drawProjectiles(gameState, clientState, clientStateDispatcher);
        this.drawMovementCommandAnimations(gameState, clientState);
        this.drawSelectionRectangle(this.context, clientState.selectionRectangle);
        this.renderMouse(clientState);

        if (config.debug) {
            this.debugRenderer.render(gameState, clientState, clientStateDispatcher);
        }

        this.context.setTransform(1, 0, 0, 1, 0, 0);
    }

    translateCamera(camera: Vector2): void {
        this.context.translate(-camera.x, -camera.y);
    }

    drawTerrain(gameState: GameState): void {
        const terrain = slpManager.getAsset(gameState.mapTerrain);
        const grid = new Grid(gameState.mapSize);

        // Terrain drawing algo documented at https://simonsan.github.io/openage-webdocs/sphinx/doc/media/terrain.html.
        const terrainCount = Math.sqrt(terrain.getFramesCount());
        grid.iterateTiles((x, y) => {
            const frame = (x % terrainCount) + ((y % terrainCount) * terrainCount);
            terrain.drawFrame(this.context, grid.tileDrawnAt(x, y), frame);
        });
    }

    drawMovementCommandAnimations(gameState: GameState, clientState: ClientState): void {
        const flag = slpManager.getAsset('interface/dc_b_misc_waypoint_flag_x1');
        unitsInGameState(gameState, clientState.selectedUnits).forEach((selectedUnit) => selectedUnit.clickedWaypoints.forEach((waypoint) => {
            flag.animateAsset(this.context, new Vector2(waypoint.x, waypoint.y), 3, gameState.ticks);
        }));
        if (clientState.lastMoveClick) {
            const asset = slpManager.getAsset('interface/MOVETO');
            const [position, startedTick] = clientState.lastMoveClick;
            asset.animateAsset(this.context, position, 3, clientState.renderedFrames - startedTick, AnimationStyle.Play);
        }
    }

    drawProjectiles(gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher): void {
        gameState.projectiles.forEach((projectile) => {
            const projectileInfo = projectileMetadata[projectile.type];

            const totalTicksInJourney = projectile.arrivingTick - projectile.startingTick;
            const ticksOfJourneyComplete = (gameState.ticks - projectile.startingTick) + this.fractionOfTickRendered;
            const percentageComplete = Math.min(1, ticksOfJourneyComplete / totalTicksInJourney);

            const positionPrevious = getArrowPosition(projectile, Math.max(0, percentageComplete - 0.1));
            const position = getArrowPosition(projectile, percentageComplete);
            const angle = position.clone().sub(positionPrevious).angle();

            slpManager.getAsset(projectileInfo.asset).drawFrame(
                this.context,
                position,
                projectileInfo.frames[projectile.id % projectileInfo.frames.length],
                angle + Math.PI * 1.5,
            );
        });
    }

    drawUnits(gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher) {

        const unitsAndPosition = gameState.units
            // Compute positions in advance, so multiple loops can use them.
            .map(unitInstance => {
                const movementVector = calculateUnitMovementPerTick(unitInstance);
                const interpolatedPosition = movementVector ?
                    unitInstance.position.clone().add(movementVector.multiplyScalar(this.fractionOfTickRendered)) :
                    unitInstance.position;
                return {
                    unitInstance,
                    interpolatedPosition,
                };
            })
            // Sort by the units y position, so that units don't appear to stand on each others heads.
            .sort((a, b) => a.interpolatedPosition.y - b.interpolatedPosition.y);

        // Draw all selection circles first, so units appear on top of them.
        unitsAndPosition.filter(({unitInstance}) => clientState.selectedUnits.includes(unitInstance.id)).forEach((unitAndPosition) => {
            const unitMetadata = unitMetadataFactory.getUnit(unitAndPosition.unitInstance.unitType);
            selectionCircle(this.context, unitMetadata.selectionRadius, 'rgba(255, 255, 255, 1)', unitAndPosition.interpolatedPosition);
        });

        unitsAndPosition.forEach(({interpolatedPosition, unitInstance}) => {
            const unitMetadata = unitMetadataFactory.getUnit(unitInstance.unitType);

            if (clientState.lastAttackedUnit && clientState.lastAttackedUnit[0] === unitInstance.id) {
                const framesSinceAttacked = clientState.renderedFrames - clientState.lastAttackedUnit[1];
                if (Math.ceil(framesSinceAttacked / 8) % 2 !== 0 && framesSinceAttacked < 32) {
                    selectionCircle(this.context, unitMetadata.selectionRadius, 'rgba(64, 189, 58, 1)', interpolatedPosition);
                }
            }

            const animationMetadata = unitMetadata.animations[unitInstance.unitState];
            const slp = slpManager.getAsset(animationMetadata.slp);
            const animationDuration = animationMetadata.animationDuration / (unitInstance.reformingSpeedFactor || 1);
            const hitBox = slp.animatePlayerAsset(
                this.context,
                interpolatedPosition,
                animationDuration,
                gameState.ticks - unitInstance.unitStateStartedAt,
                unitInstance.ownedByPlayer,
                unitInstance.direction,
                animationMetadata.style,
            );

            if (unitInstance.hitPoints !== unitMetadata.hitPoints) {
                const anchoredAt = unitInstance.position;
                const hpBarWidth = 40;

                const hpLeft = unitInstance.hitPoints / unitMetadata.hitPoints;
                this.context.beginPath();
                this.context.fillStyle = 'black';
                this.context.fillRect(anchoredAt.x - (hpBarWidth / 2), anchoredAt.y + unitMetadata.hitPointsBarAnchor, hpBarWidth, 6);

                this.context.beginPath();
                this.context.fillStyle = 'green';
                this.context.fillRect(anchoredAt.x - (hpBarWidth / 2) + 1, anchoredAt.y + unitMetadata.hitPointsBarAnchor + 1, (hpBarWidth - 2) * hpLeft, 4);
            }

            clientStateDispatcher({
                n: 'UNIT_DRAWN',
                hitBox,
                unit: unitInstance,
            });
        });
    }

    drawFallenUnits(gameState: GameState) {
        gameState.fallenUnits.map((unitInstance) => {
            const unitMetadata = unitMetadataFactory.getUnit(unitInstance.unitType);

            const ticksUntilDecay = 100;
            const ticksSinceFallen = gameState.ticks - unitInstance.unitFallenAt;
            const animationMetadata = unitMetadata.animations[ticksSinceFallen < ticksUntilDecay ? UnitState.Falling : UnitState.Decaying];

            const slp = slpManager.getAsset(animationMetadata.slp);
            slp.animatePlayerAsset(
                this.context,
                unitInstance.position,
                animationMetadata.animationDuration,
                ticksSinceFallen < ticksUntilDecay ? ticksSinceFallen : ticksSinceFallen - ticksUntilDecay,
                unitInstance.ownedByPlayer,
                unitInstance.direction,
                animationMetadata.style,
            );
        });
    }

    drawSelectionRectangle(context: CanvasRenderingContext2D, selection: Rectangle | null) {
        if (!selection) {
            return;
        }
        const nudgeFactor = 1;
        square(context, selection, 'black', 1);
        square(context, {
            p1: new Vector2(selection.p1.x - nudgeFactor, selection.p1.y - nudgeFactor),
            p2: new Vector2(selection.p2.x - nudgeFactor, selection.p2.y - nudgeFactor),
        }, 'white', 1);
    }

    renderMouse(state: ClientState) {
        const cursorMap = {
            [ActiveCommand.AttackGround]: 'area_attack',
            [ActiveCommand.Patrol]: 'patrol',
            [ActiveCommand.Default]: 'default',
        };
        const anchorMap: { [key: string]: string } = {
            'default': '0 0',
            'area_attack': '0 0',
            'patrol': '0 0',
            'attack': '0 0',
        };

        let cursor;
        if (state.activeCommand === ActiveCommand.Default) {
            const attacking = state.selectedUnits.length > 0 && state.unitHitBoxes
                .filter(({unit}) => unit.ownedByPlayer !== state.playingAs)
                .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, state.mousePosition));
            cursor = attacking ? 'attack' : 'default';
        } else {
            cursor = cursorMap[state.activeCommand];
        }

        if (cursor !== this.lastCursor) {
            const anchor = anchorMap[cursor];
            this.canvas.style.cursor = `url("${assetUrl(`/graphics/cursor/${cursor}32x32.cur`)}") ${anchor}, none`;
            this.lastCursor = cursor;
        }
    }
}
