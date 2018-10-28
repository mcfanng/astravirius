
import 'phaser';
import { MainScene } from '../scenes/mainScene';

export let GameConfig: GameConfig = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'game',
    scene: MainScene,
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      }
};
