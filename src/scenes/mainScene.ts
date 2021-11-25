
import 'phaser';
// import * as cat from '../../assets/sprites/pixelatedCat.png';
// import * as red from '../../assets/sprites/red.png';
// import * as space1 from '../../assets/sprites/Space1.png';
import * as sky from '../../assets/sky.png';
import * as bomb from '../../assets/bomb.png';
import * as dude from '../../assets/dude.png';
import * as platform from '../../assets/platform.png';
import * as star from '../../assets/star.png';
export class MainScene extends Phaser.Scene {

  // private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: 'MainScene'
    });
  }

  public preload(): void {
    
    this.load.image('sky', sky);
    this.load.image('ground', platform );
    this.load.image('star', star);
    this.load.image('bomb', bomb);
    this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
  }

  public create(): void {
    
    this.add.image(400, 300, 'sky');
    // this.add.sprite(400, 300, 'background');
    //  const particles = this.add.particles('red');

    // const emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });

    // const logo = this.physics.add.image(400, 100, 'cat');

    //  logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);

    // emitter.startFollow(logo);
  }
}
