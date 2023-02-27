var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload (){
    this.load.image('background', 'assets/background.png');
    this.load.image('trashCan', 'assets/trashCan.png');
    //this.load.spritesheet('paper', 'assets/paper.png', 38, 48);
    
}

function create(){
    this.add.image(400, 300, 'background');
    //myPaper = this.game.add.sprite
}

function update() {

}