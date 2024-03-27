export class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame")
    }
    preload(){
        this.load.image("map","/assets/map.png")
        this.load.image("background","/assets/background.png")
    }
    create(){
       this.add.image(0, 0, "background").setOrigin(0);
       this.startButton = this.add.text(512, 620, "Start", { fill: '#ffffff' })
            .setInteractive()
            .on('pointerdown', () => this.startGame())
            .setStyle({ fontFamily: 'Arial', fontSize: '24px', padding: { x: 20, y: 10 } });
    }
    startGame() {
        this.scene.start("playGame");
    }
}