import logo from '@assets/logo.png'

class Asset {
  constructor(
    public readonly key: string,
    public readonly value: string,
    public readonly type: string,
    public readonly config?: Phaser.Loader.FileTypes.ImageFrameConfig
  ) {}
}

export const Assets = [new Asset('logo', logo, 'image')]
