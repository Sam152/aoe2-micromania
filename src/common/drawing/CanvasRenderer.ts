import {ClientDispatcher, ClientState, GameState, Rectangle, RendererInterface} from '../../types';
import SlpManager from './SlpManager';
import unitMetadataFactory from '../units/unitMetadataFactory';
import {circle, square} from './shapes';
import screenManager from './screenManager';
import {Vector2} from 'three';
import config from '../config';
import AnimationStyle from '../units/AnimationStyle';
import Grid from '../terrain/Grid';

export default class CanvasRenderer implements RendererInterface {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private slpManager: SlpManager;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.slpManager = new SlpManager('/assets');

        // @ts-ignore
        window.ctx = this.context;

        this.fit();
        window.addEventListener('resize', this.fit.bind(this));
    }

    fit() {
        this.context.canvas.width = window.innerWidth * screenManager.getCanvasScale();
        this.context.canvas.height = window.innerHeight * screenManager.getCanvasScale();
    }

    getSize(): Vector2 {
        return new Vector2(this.context.canvas.width, this.context.canvas.height);
    }

    bootUp(): Promise<void> {
        return this.slpManager.downloadPreRenderAll();
    }

    render(gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher): void {
        if (config.debug) {
            window.ctx = this.context;
        }
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);

        this.translateCamera(clientState.camera);
        this.drawTerrain(gameState);
        this.drawUnits(gameState, clientState, clientStateDispatcher);
        this.drawMovementCommandAnimations(gameState, clientState);
        this.drawSelectionRectangle(this.context, clientState.selectionRectangle);

        this.context.setTransform(1, 0, 0, 1, 0, 0);
    }

    translateCamera(camera: Vector2) {
        this.context.translate(-camera.x, -camera.y);
    }

    drawTerrain(gameState: GameState) {
        const terrain = this.slpManager.getAsset('terrain-green');
        const grid = new Grid(gameState.mapSize);

        // Terrain drawing algo documented at https://simonsan.github.io/openage-webdocs/sphinx/doc/media/terrain.html.
        const terrainCount = Math.sqrt(terrain.getFramesCount());
        grid.iterateTiles((x, y) => {
            const frame = (x % terrainCount) + ((y % terrainCount) * terrainCount);
            terrain.drawFrame(this.context, grid.tileDrawnAt(x, y), frame);
        });
    }

    drawMovementCommandAnimations(gameState: GameState, clientState: ClientState) {
        const flag = this.slpManager.getAsset('waypoint-flag');
        clientState.selectedUnits.forEach((unit) => unit.clickedWaypoints.forEach((waypoint) => {
            flag.animateAsset(this.context, new Vector2(waypoint.x, waypoint.y), 3, gameState.ticks);
        }));
        if (clientState.lastMoveClick) {
            const asset = this.slpManager.getAsset('move-command');
            const [position, startedTick] = clientState.lastMoveClick;
            asset.animateAsset(this.context, position, 9, clientState.renderedFrames - startedTick, AnimationStyle.Play);
        }
    }

    drawUnits(gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher) {
        gameState.units.map((unitInstance) => {
            const unitMetadata = unitMetadataFactory.getUnit(unitInstance.unitType);
            const animationMetadata = unitMetadata.animations[unitInstance.unitState];
            const slp = this.slpManager.getAsset(animationMetadata.slp);

            // If the unit is selected, draw an oval around its base.
            if (clientState.selectedUnits.map((unit) => unit.id).includes(unitInstance.id)) {
                this.context.beginPath();
                this.context.strokeStyle = 'rgba(255, 255, 255, 1)';
                this.context.ellipse(unitInstance.position.x, unitInstance.position.y, slp.getWidth() / 1.5, slp.getWidth() / 3, 0, 0, 2 * Math.PI);
                this.context.stroke();
            }

            if (animationMetadata.underSlp) {
                const underSlp = this.slpManager.getAsset(animationMetadata.underSlp);
                underSlp.animatePlayerAsset(
                    this.context,
                    unitInstance.position,
                    animationMetadata.animationDuration,
                    gameState.ticks - unitInstance.unitStateStartedAt,
                    unitInstance.ownedByPlayer,
                    unitInstance.direction,
                    animationMetadata.style,
                );
            }

            const hitBox = slp.animatePlayerAsset(
                this.context,
                unitInstance.position,
                animationMetadata.animationDuration,
                gameState.ticks - unitInstance.unitStateStartedAt,
                unitInstance.ownedByPlayer,
                unitInstance.direction,
                animationMetadata.style,
            );


            if (config.debug) {
                this.context.font = '11px Arial';
                this.context.fillText(`${unitInstance.id}`, unitInstance.position.x - 20, unitInstance.position.y - 30);
            }

            clientStateDispatcher({
                name: 'UNIT_DRAWN',
                hitBox,
                unit: unitInstance,
            });
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
}
