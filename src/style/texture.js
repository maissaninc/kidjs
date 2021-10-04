export default class Texture {
  constructor(context, imageUrl, opacity = 0.2) {
    let image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      this.pattern = context.createPattern(image, 'repeat');
    };
    this.opacity = 0.2;
  }
}
