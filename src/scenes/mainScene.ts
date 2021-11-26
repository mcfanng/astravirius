
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

  private platforms: Phaser.Physics.Arcade.StaticGroup;
  private player : Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  constructor() {
    super({
      key: 'MainScene'
    });
  }

  public preload(): void {

    this.load.image('sky', sky);
    this.load.image('ground', platform);
    this.load.image('star', star);
    this.load.image('bomb', bomb);
    this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
  }

  public create(): void {

    this.add.image(400, 300, 'sky');

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');
    this.player = this.physics.add.sprite(100, 450, 'dude');

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
    this.physics.add.collider(this.player, this.platforms);
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
