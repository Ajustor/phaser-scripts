import { Scale } from 'phaser'
import GameScalePlugin from 'phaser-plugin-game-scale'
import { BootScene } from '@scenes/BootScene'
import { PlayScene } from '@scenes/PlayScene'
import { loadConfig } from './SaveSystem'

export const width: number = window.innerWidth
export const height: number = window.innerHeight

export const defaultUserConfig = {
  version: '0.0.1',
  audio: {
    master: 0.15,
    bgm: 0.15,
    bgs: 0.15,
  },
  language: 'fr',
  saveName: 'save',
  controls: {
    up: 'z',
    left: 'q',
    right: 'd',
    down: 's',
    validate: 'o',
    cancel: 'k',
    menu: 't',
  },
}

export const UserConfig = loadConfig() || defaultUserConfig

export const Config: GameConfig = {
  width,
  height,
  type: Phaser.AUTO,
  parent: 'app',
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  fps: {
    min: 30,
    target: 60,
  },
  render: { pixelArt: true, antialias: false },
  scene: [BootScene, PlayScene],
  scale: Scale.MAX_ZOOM,
  plugins: {
    global: [
      {
        key: 'GameScalePlugin',
        plugin: GameScalePlugin,
        mapping: 'gameScale',
        data: {
          debounce: false,
          debounceDelay: 50, // Debounce interval, in ms
          maxHeight: Infinity,
          maxWidth: Infinity,
          minHeight: 0,
          minWidth: 0,
          mode: 'fit',
          resizeCameras: true, // Resize each scene camera when resizing the game
          snap: null, // Snap interval, in px
        },
      },
    ],
  },
}
