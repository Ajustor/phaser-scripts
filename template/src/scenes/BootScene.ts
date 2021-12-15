import { Scene } from 'phaser'
import logo from '@assets/logo.png'
import { Assets } from '@utils/AssetsLoader'

export class BootScene extends Scene {
  public static SCENE_NAME: string = 'BootScene'

  constructor() {
    super({ key: BootScene.SCENE_NAME })
  }

  public preload() {
    this.load.image('logo', logo)
    const { innerWidth: width, innerHeight: height } = window

    const x = width / 4
    const y = height / 2
    let fileCount = 0

    const progress = this.add.graphics()
    const back = this.add.graphics()
    const text = this.add.text(x, y - 30, 'Start Loading', {
      fill: '#ffffff',
    })

    back.fillStyle(0xffffff, 0.4)
    back.fillRect(x - 5, y - 5, width / 2 + 10, height / 16 + 10)

    progress.clear()
    progress.fillStyle(0xffffff, 0.8)

    this.load.on('progress', (value: number) => {
      progress.fillRect(x, y, (width / 2) * value, height / 16)
    })

    this.load.on('filecomplete', () => {
      fileCount++
      text.setText(`File Complete: ${fileCount}/${Assets.length}`)
    })

    this.load.on('complete', () => {
      progress.destroy()
      back.destroy()
      text.destroy()
    })

    for (const { key, value, type, config } of Assets) {
      switch (type) {
        case 'image':
          this.load.image(key, value)
          break
        case 'audio':
          this.load.audio(key, value)
          break
        case 'spritesheet':
          this.load.spritesheet(key, value, config)
          break
        case 'tilemapTiledJSON':
          this.load.tilemapTiledJSON({ key, url: value })
          break
        default:
          console.warn(`${type} is not allowed on loader`)
      }
    }
  }

  public create() {
    this.scene.start('PlayScene')
  }
}
