
import 'phaser';
import { MainScene } from '../scenes/mainScene';

export let GameConfig: Phaser.Types.Core.GameConfig = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'currentGame',
    scene: MainScene,
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 }
        }
      }
};
