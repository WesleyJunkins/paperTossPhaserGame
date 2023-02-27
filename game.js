var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
paper = this.physics.add.sprite(100, 450, 'paper');
paper.setBounce(0.2);
paper.setCollideWorldBounds(true);

function preload (){
    this.load.image('background', 'assets/background.png');
    this.load.image('trashCan', 'assets/trashCan.png');
    this.load.spritesheet('paper', 'assets/paper.png', {frameWidth: 32, frameHeight: 48});
    this.load.image('ground', 'assets/ground.png');
    
}

function create(){
    this.add.image(400, 300, 'background');
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 700, 'ground').setScale(1).refreshBody();
    this.load.sprite
    // cannonBall = this.add.sprite(500, 700, 'cannonBall');
    // cannonBall.scale.setTo(0.5, 0.5);
}

function update() {

}