import {ClientDispatcher, ClientState, GameState} from '../../types';
import SlpManager from './SlpManager';
import unitMetadataFactory from '../game/unitMetadataFactory';
import {circle} from "./shapes";
import screenManager from "./screenManager";

export default class CanvasRenderer {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private slpManager: SlpManager;

    constructor(canvas: HTMLCanvasElement, slpManager: SlpManager) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.slpManager = slpManager;

        this.fit();
        window.addEventListener('resize', this.fit.bind(this));
    }

    fit() {
        this.context.canvas.width = window.innerWidth * screenManager.getCanvasScale();
        this.context.canvas.height = window.innerHeight * screenManager.getCanvasScale();
    }

    render(gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher) {

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);

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

        if (clientState.lastLeftClick) {
            circle(this.context, clientState.lastLeftClick);
        }
    }
}
