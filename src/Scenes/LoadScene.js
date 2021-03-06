import { CST } from "../CST";

export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    }
    init() {
        this.readyCount = 0;
    }

    preload() {
        // add logo image
        this.load.image("title_bg", "./assets/image/background-menu.png");
        this.load.image("end_bg", "./assets/image/backgroundend.png");

        this.load.audio("title_music", "./assets/audio/menu-music.mp3");
        this.load.audio("end_music", "./assets/audio/failsound.mp3");

        this.load.audio("soundbutton", "./assets/audio/screenbuttons.wav");
        this.load.image('sablier', './assets/image/time-01.svg');
        this.load.image('mort', './assets/image/mort.svg');

        this.load.image('vitesse', './assets/image/vitesse.svg');
        //  this.load.image("options_button", "./assets/image/options_button1.png");
        this.load.image("play_button", "./assets/image/play_button1.png");
        //  this.load.image("logo", "./assets/image/logo.png");
        this.load.image("back_menu_button", "./assets/image/backtomenu.png");
        this.load.image("retry_button", "./assets/image/retry.png");
        this.load.spritesheet("cat", "./assets/sprite/cat.png", {
            frameHeight: 32,
            frameWidth: 32
        });

        this.load.spritesheet("eric", "./assets/sprite/eric.png", {
            frameHeight: 32,
            frameWidth: 29.5
        });

        this.load.audio("title_music", "./assets/audio/shuinvy-childhood.mp3");

        // for(let i = 0; i < 100; i++){
        //     this.load.spritesheet("cat" + i++,"./assets/sprite/cat.png", {
        //         frameWidth: 32,
        //         frameHeight: 32
        //     })
        // }
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //white
            }
        })

        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
        })
        // this.load.on("complete", ()=>{
        //     console.log("Done");

        // })

    }

    create() {
        this.scene.start(CST.SCENES.MENU);
        this.scene.launch()
    }
}