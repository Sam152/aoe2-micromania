import {ClientDispatcher, ClientState, GameState, Rectangle, RendererInterface} from '../../types';
import SlpManager from './SlpManager';
import unitMetadataFactory from '../units/unitMetadataFactory';
import {circle, square} from "./shapes";
import screenManager from "./screenManager";
import {Vector2} from "three";
import {normalizeRect} from "../util/rectIntersectingWithRect";
import engineConfiguration from "../units/engineConfiguration";

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

    bootUp(): Promise<void> {
        return this.slpManager.downloadPreRenderAll();
    }

    render(gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher): void {
        if (engineConfiguration.debug) {
            window.ctx = this.context;
        }

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);
        this.drawUnits(gameState, clientState, clientStateDispatcher);
        this.drawWaypointFlags(gameState, clientState);
        this.drawSelectionRectangle(this.context, clientState.selectionRectangle);
    }

    drawWaypointFlags(gameState: GameState, clientState: ClientState) {
        const flag = this.slpManager.getAsset('waypoint-flag');
        clientState.selectedUnits.forEach(unit => unit.clickedWaypoints.forEach(waypoint => {
            flag.draw(this.context, new Vector2(waypoint.x, waypoint.y), 3, gameState.ticks);
        }));
    }

    drawUnits(gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher) {
        gameState.units.map((unitInstance) => {
            const unitMetadata = unitMetadataFactory.getUnit(unitInstance.unitType);
            const animationMetadata = unitMetadata.animations[unitInstance.unitState];
            const slp = this.slpManager.getAsset(animationMetadata.slp);

            // If the unit is selected, draw an oval around its base.
            if (clientState.selectedUnits.map(unit => unit.id).includes(unitInstance.id)) {
                this.context.beginPath();
                this.context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                this.context.ellipse(unitInstance.position.x, unitInstance.position.y, slp.getWidth() / 1.5, slp.getWidth() / 3, 0, 0, 2 * Math.PI);
                this.context.stroke();
            }

            const hitBox = slp.drawUnit(
                this.context,
                unitInstance.position,
                animationMetadata.animationDuration,
                gameState.ticks - unitInstance.unitStateStartedAt,
                unitInstance.ownedByPlayer,
                unitInstance.direction,
                animationMetadata.style,
            );


            if (engineConfiguration.debug) {
                this.context.font = "11px Arial";
                this.context.fillText(`${unitInstance.id}`, unitInstance.position.x - 20, unitInstance.position.y - 30);
            }

            clientStateDispatcher({
                name: "UNIT_DRAWN",
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
        square(context, selection, "black", 1);
        square(context, {
            p1: new Vector2(selection.p1.x - nudgeFactor, selection.p1.y - nudgeFactor),
            p2: new Vector2(selection.p2.x - nudgeFactor, selection.p2.y - nudgeFactor),
        }, "white", 1);
    }
}
