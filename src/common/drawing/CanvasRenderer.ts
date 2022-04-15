import {ClientDispatcher, ClientState, GameState, Rectangle, RendererInterface} from '../../types';
import SlpManager from './SlpManager';
import unitMetadataFactory from '../units/unitMetadataFactory';
import {circle, square} from "./shapes";
import screenManager from "./screenManager";
import {Vector2} from "three";
import {normalizeRect} from "../util/rectIntersectingWithRect";

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
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);

        this.drawUnits(gameState, clientStateDispatcher);
        this.drawSelectionRectangle(this.context, clientState.selectionRectangle);

        if (clientState.selectionRectangle) {
            const normalized = normalizeRect(clientState.selectionRectangle);
            circle(this.context, normalized.p1, 10);
            circle(this.context, normalized.p2, 10, 'red');
        }
    }

    drawUnits(gameState: GameState, clientStateDispatcher: ClientDispatcher) {
        gameState.units.map((unitInstance) => {
            const unitMetadata = unitMetadataFactory.getUnit(unitInstance.unitType);
            const animationMetadata = unitMetadata.animations[unitInstance.unitState];
            const slpAsset = this.slpManager.getAsset(animationMetadata.slp);

            const hitBox = slpAsset.draw(
                this.context,
                unitInstance.position,
                animationMetadata.animationDuration,
                gameState.ticks - unitInstance.unitStateStartedAt,
                unitInstance.ownedByPlayer,
                unitInstance.direction,
                animationMetadata.style,
            );
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
