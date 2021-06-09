import Car from "./car.js"
import Player from "./player.js"

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    init() {
        // this.input.on("pointerdown", e => {this.movePlayer(e)});
        // this.input.on("pointerup", e => {this.stopPlayer(e)});

        // this.playerIsMoving = false;
        // this.playerVelocity = 5;

        this.slowCar = 3;
        this.fastCar = 6;
        this.fastestCar = 12;
    }

    // movePlayer(event) {
    //     this.playerIsMoving = true;
    // }

    // stopPlayer(e) {
    //     this.playerIsMoving = false;
    // }

    preload() {
        this.load.image("background", "./images/map.png");
        this.load.image("player", "./images/character_blonde_green.png");
        this.load.image("bike", "./images/motorcycle_green.png");
        this.load.image("yellowCar", "./images/car_yellow_1.png");
    }

    create() {
        let bg= this.add.sprite(0, 0, "background");
        bg.setOrigin(0);

        this.bike = this.add.sprite(this.game.config.width / 2, 70, "bike");

        // this.player = this.add.sprite(640, 1200, "player");

        this.player = this.add.existing(new Player(this, 640, 1200, "player"));

        this.cars = [];
        this.cars.push(
            this.car001 = this.add.existing(new Car(this, 128 + 64, 7 * 128 + 64,"yellowCar", true))
        );

        this.cars.push(
            this.car002 = this.add.existing(new Car(this, 10 * 128 + 64, 6 * 128 + 64,"yellowCar", false))
        );
        
        this.cars.push(
            this.car003 = this.add.existing(new Car(this, 128 + 64, 4 * 128 + 64,"yellowCar", true))
        );

        this.cars.push(
            this.car004 = this.add.existing(new Car(this, 10 * 128 - 64, 2 * 128 + 64,"yellowCar", false))
        );
        this.cars.push(
            this.car005 = this.add.existing(new Car(this, 128 + 64, 128 + 64,"yellowCar", true))
        );
        
    }

    update(time) {
        // if(this.playerIsMoving) {
        //     this.player.y -= this.playerVelocity;
        // }

        this.player.update(time);

        for(let i = 0; i < this.cars.length; i++)
        {
            this.cars[i].update(time);
        }

        let playerColl = this.player.getBounds();
        let bikeColl = this.bike.getBounds();

        if(Phaser.Geom.Intersects.RectangleToRectangle(playerColl, bikeColl))
        {
            console.log("Vruuum...");
            this.scene.restart();
        }

        for(let i = 0; i < this.cars.length; i++) {
            if(this.cars[i].overlaps(this.player)) {
                console.log("atroplou-se...");
                this.scene.restart();
            }
        }
    }
}