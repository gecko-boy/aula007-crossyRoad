export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super (scene, x, y, scene)

        this.setPosition(x, y);

        this.playerIsMoving = false;
        this.playerVelocity = 5;

        this.scene.input.on("pointerdown", e => {this.movePlayer(e)});
        this.scene.input.on("pointerup", e => {this.stopPlayer(e)});
    }

    movePlayer(event) {
        this.playerIsMoving = true;
    }

    stopPlayer(e) {
        this.playerIsMoving = false;
    }

    update(time) {
        if(this.playerIsMoving) {
            this.y -= this.playerVelocity;
        }

    }
}