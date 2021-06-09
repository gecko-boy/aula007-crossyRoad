export default class Car extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, texture, flipped) {
        super(scene, x, y, texture)

        this.setPosition(x, y);
        this.setFlip(flipped, false);

        let minSpeed = 3;
        let maxSpeed = 12;
        this.speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
    }

    update(time)
    {
        if(this.x <= this.displayWidth / 2 || this.x >= this.scene.game.config.width + this.displayWidth / 2)
        {
            this.flipX = !this.flipX;
        }

        this.x += this.flipX === true ? this.speed : - this.speed;
    }

    overlaps(otherObject) {
        let otherColl = otherObject.getBounds();
        let myColl = this.getBounds();

        return Phaser.Geom.Intersects.RectangleToRectangle(otherColl, myColl);
    }
}