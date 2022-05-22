import {ClientDispatcher, ClientState, GameState, Rectangle, RendererInterface} from '../../types';
import SlpManager from './SlpManager';
import unitMetadataFactory from '../units/unitMetadataFactory';
import {square} from './shapes';
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

export default class CanvasRenderer implements RendererInterface {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private slpManager: SlpManager;
    lastRenderedGameTick: number;
    frameAtLastRenderedTick: number;
    framesPerTick: number;
    fractionOfTickRendered: number;
    private lastCursor: number | null;
    private debugRenderer: RendererInterface;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.slpManager = new SlpManager('/graphics');

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
    }

    fit() {
        this.context.canvas.width = window.innerWidth * screenManager.getCanvasScale();
        this.context.canvas.height = (window.innerHeight - screenManager.getTopOffset()) * screenManager.getCanvasScale();
    }

    getSize(): Vector2 {
        return new Vector2(this.context.canvas.width, this.context.canvas.height);
    }

    bootUp(): Promise<void> {
        return this.slpManager.downloadPreRenderAll();
    }

    render(gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher): void {
        // Attempt to smooth out the rendering of game ticks, which are slower than how often a frame is rendered, by
        // caclulating what fraction of a game tick we are through. This requires us to record what frame we were at
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
        const terrain = this.slpManager.getAsset('terrain/green');
        const grid = new Grid(gameState.mapSize);

        // Terrain drawing algo documented at https://simonsan.github.io/openage-webdocs/sphinx/doc/media/terrain.html.
        const terrainCount = Math.sqrt(terrain.getFramesCount());
        grid.iterateTiles((x, y) => {
            const frame = (x % terrainCount) + ((y % terrainCount) * terrainCount);
            terrain.drawFrame(this.context, grid.tileDrawnAt(x, y), frame);
        });
    }

    drawMovementCommandAnimations(gameState: GameState, clientState: ClientState): void {
        const flag = this.slpManager.getAsset('interface/waypoint-flag');
        unitsInGameState(gameState, clientState.selectedUnits).forEach((selectedUnit) => selectedUnit.clickedWaypoints.forEach((waypoint) => {
            flag.animateAsset(this.context, new Vector2(waypoint.x, waypoint.y), 3, gameState.ticks);
        }));
        if (clientState.lastMoveClick) {
            const asset = this.slpManager.getAsset('interface/move-command');
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

            this.slpManager.getAsset(projectileInfo.asset).drawFrame(
                this.context,
                position,
                projectileInfo.frames[projectile.id % projectileInfo.frames.length],
                angle + Math.PI * 1.5,
            );
        });
    }

    drawUnits(gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher) {
        gameState.units.forEach((unitInstance) => {
            const unitMetadata = unitMetadataFactory.getUnit(unitInstance.unitType);
            const animationMetadata = unitMetadata.animations[unitInstance.unitState];
            const slp = this.slpManager.getAsset(animationMetadata.slp);

            const movementVector = calculateUnitMovementPerTick(unitInstance);
            const interpolatedPosition = movementVector ?
                unitInstance.position.clone().add(movementVector.multiplyScalar(this.fractionOfTickRendered)) :
                unitInstance.position;

            // If the unit is selected, draw an oval around its base.
            if (clientState.selectedUnits.includes(unitInstance.id)) {
                this.context.beginPath();
                this.context.strokeStyle = 'rgba(255, 255, 255, 1)';
                this.context.ellipse(interpolatedPosition.x, interpolatedPosition.y, unitMetadata.selectionRadius, unitMetadata.selectionRadius / 3, 0, 0, 2 * Math.PI);
                this.context.stroke();
            }

            const animationDuration = animationMetadata.animationDuration / (unitInstance.reformingSpeedFactor || 1);

            if (animationMetadata.underSlp) {
                const underSlp = this.slpManager.getAsset(animationMetadata.underSlp);
                underSlp.animatePlayerAsset(
                    this.context,
                    interpolatedPosition,
                    animationDuration,
                    gameState.ticks - unitInstance.unitStateStartedAt,
                    unitInstance.ownedByPlayer,
                    unitInstance.direction,
                    animationMetadata.style,
                );
            }

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

            const slp = this.slpManager.getAsset(animationMetadata.slp);
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
            [ActiveCommand.AttackGround]: 8,
            [ActiveCommand.Patrol]: 18,
            [ActiveCommand.Default]: 0,
        };
        const anchorMap: {[key: number]: string} = {
            8: '0 0',
            18: '10 24',
            0: '0 0',
            4: '0 0',
        };

        let cursor;
        if (state.activeCommand === ActiveCommand.Default) {
            const attacking = state.selectedUnits.length > 0 && state.unitHitBoxes
                .filter(({unit}) => unit.ownedByPlayer !== state.playingAs)
                .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, state.mousePosition));
            cursor = attacking ? 4 : 0;
        } else {
            cursor = cursorMap[state.activeCommand];
        }

        if (cursor !== this.lastCursor) {
            const anchor = anchorMap[cursor];
            this.canvas.style.cursor = `url("/graphics/interface/${cursor}.svg") ${anchor}, none`;
            this.lastCursor = cursor;
        }
    }
}
