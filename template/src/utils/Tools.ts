export const vwToPixel = (value: number): number => {
  return (window.innerWidth * value) / 100
}

export const getRandomInt = (min: number, max: number) => {
  return Phaser.Math.Between(min, max)
}

export const getRandomFloat = (min: number, max: number) => {
  return Phaser.Math.FloatBetween(min, max)
}

export function wait(sec: number) {
  return new Promise((res) => setTimeout(res, sec * 1000))
}
