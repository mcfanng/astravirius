import 'phaser';
import { GameConfig as MainGameConfig } from './gameConfig/mainGame';

class SimpleGame extends Phaser.Game {

    public game: any;

    constructor(config) {
        super(config);
        console.log('here');
        //  this.game = new Phaser.Game({...config});
    }
    public create() {
        const logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }

    // private preload() {
    //   this.game.load.image('logo', 'phaser2.png');
    // }

}

window.onload = () => {

    const game = new SimpleGame(MainGameConfig);
    console.log(game.isRunning);

};
