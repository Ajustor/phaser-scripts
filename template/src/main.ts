import * as Phaser from 'phaser'
import { Config } from '@utils/Config'

declare global {
  interface Window {
    game: Phaser.Game
  }
}

const game = new Phaser.Game(Config)
window.game = game
