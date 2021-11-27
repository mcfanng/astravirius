import 'phaser';
import './css/bootstrap.min.css';
import './css/app.css';
import * as bootstrap from 'bootstrap';
import { GameConfig as MainGameConfig } from './gameConfig/mainGameConfig';

class SimpleGame extends Phaser.Game {

    constructor(config) {
        super(config);
        bootstrap;

    }
}

window.onload = () => {
    const game = new SimpleGame(MainGameConfig);
    console.log(game.isBooted);
};

