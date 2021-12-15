import { Scene } from 'phaser'

export class PlayScene extends Scene {
  public static SCENE_NAME: string = 'PlayScene'

  constructor() {
    super({ key: PlayScene.SCENE_NAME })
  }

  public create() {
    const logo = this.add.image(400, 150, 'logo')

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    })
  }
}
