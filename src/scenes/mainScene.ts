
import 'phaser';
import * as space1 from '../../assets/images/Space1.png';
export class MainScene extends Phaser.Scene {

  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
      super({
        key: 'MainScene'
      });
    }

  public preload(): void {
      this.load.image('background', space1);
      console.log(this.plugins);
    }

  public create(): void {
      this.phaserSprite = this.add.sprite(400, 300, 'background');
      console.log(this.phaserSprite);
    }
  }
