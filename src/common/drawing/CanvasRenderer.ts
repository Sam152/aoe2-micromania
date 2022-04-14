import {ClientState, GameState} from '../../types';
import SlpManager from "./SlpManager";
import unitMetadataFactory from "../game/unitMetadataFactory";
import CompassDirection from "../game/CompassDirection";
import {circle} from "./shapes";
import unit from "../game/Unit";
import UnitState from "../game/UnitState";

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
        this.context.canvas.width = window.innerWidth * Math.min(1.5, window.devicePixelRatio);
        this.context.canvas.height = window.innerHeight * Math.min(1.5, window.devicePixelRatio);
    }

    render(gameState: GameState, clientState: ClientState) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);

        gameState.units.map((unitInstance) => {
            const unitMetadata = unitMetadataFactory.getUnit(unitInstance.unitType);
            const animationMetadata = unitMetadata.animations[UnitState.Idle];
            const slpAsset = this.slpManager.getAsset(animationMetadata.slp);

            slpAsset.draw(
                this.context,
                unitInstance.position,
                animationMetadata.animationDuration,
                gameState.ticks,
                unitInstance.ownedByPlayer,
                unitInstance.direction,
            );
        });
    }
}
