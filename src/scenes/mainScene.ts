
import 'phaser';
import * as cat from '../../assets/sprites/cat.png';
import * as red from '../../assets/sprites/red.png';
import * as space1 from '../../assets/sprites/Space1.png';
export class MainScene extends Phaser.Scene {

  // private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
      super({
        key: 'MainScene'
      });
    }

  public preload(): void {
      this.load.image('background', space1);
      this.load.image('cat', cat);
      this.load.image('red', red);
    }

  public create(): void {
      this.add.sprite(400, 300, 'background');
      const particles = this.add.particles('red');

      const emitter = particles.createEmitter({
          speed: 100,
          scale: { start: 1, end: 0 },
          blendMode: 'ADD'
      });

      const logo = this.physics.add.image(400, 100, 'cat');

      logo.setVelocity(100, 200);
      logo.setBounce(1, 1);
      logo.setCollideWorldBounds(true);

      emitter.startFollow(logo);
    }
  }
