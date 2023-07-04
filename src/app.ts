import 'phaser';
//import './app.css';
//import * as bootstrap from 'bootstrap';
import { GameConfig as MainGameConfig } from './gameConfig/mainGameConfig';

class SimpleGame extends Phaser.Game {

    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
       // bootstrap;
    }
}

window.onload = () => {
    const game = new SimpleGame(MainGameConfig);
    console.log(game.isBooted);
};
