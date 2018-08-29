import * as Phaser from 'phaser'

class SimpleGame {

    constructor() {
       // this.game = new Phaser.Game( {width:800, height:600, Phaser.AUTO, 'content'} );
    }

  //  game: Phaser.Game;

    preload() {
    //    this.game.load.image('logo', 'phaser2.png');
    }

    create() {
   //     var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
   //     logo.anchor.setTo(0.5, 0.5);
    }

}

window.onload = () => {

    var game = new SimpleGame();

};