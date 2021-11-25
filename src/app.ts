import 'phaser';
import './app.css';
import { GameConfig as MainGameConfig } from './gameConfig/mainGameConfig';

class SimpleGame extends Phaser.Game {

    constructor(config) {
        super(config);
    }
}

window.onload = () => {
    const game = new SimpleGame(MainGameConfig);
    console.log(game.isBooted);
};
