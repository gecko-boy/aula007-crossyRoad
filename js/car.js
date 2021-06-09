export default class Car extends Phaser.GameObjects.Sprite {
    contructor (scene, x, y, texture, flipped) {
        super(scene, x, y, texture);

        this.setPosition(x, y);
        this.setFlip(flipped, false);

        this.speed = 3;
    }

    update(time)
    {
        if(this.x <= this.displayWidth / 2 || this.x >= this.scene.game.config.width + this.displayWidth / 2)
        {
            this.flipX = !this.flipX;
        }

        this.x += this.flipX === true ? this.speed : - this.speed;
    }
}