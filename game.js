var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    physics: {
        default: 'matter'
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

//paper = this.physics.add.sprite(100, 450, 'paper');
// paper.setBounce(0.2);
// paper.setCollideWorldBounds(true);

function preload (){
    this.load.image('background', 'assets/background.png');
    this.load.image('trashCan', 'assets/trashCan.png');
    //this.load.spritesheet('paper', 'assets/paper.png', {frameWidth: 32, frameHeight: 48});
    this.load.image('ground', 'assets/ground.png');
    this.load.image('ball', 'assets/cannonBall.png');
    
}

function create(){
    this.add.image(400, 300, 'background');


    this.matter.world.setBounds();

    var canDrag = this.matter.world.nextGroup();

    this.matter.add.image(100, 100, 'ball', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(canDrag);

    this.matter.add.mouseSpring({length: 1, stiffness: 0.6, collisionFilter: {group: canDrag}});




    // this.add.image(400, 300, 'background');
    // platforms = this.physics.add.staticGroup();
    // platforms.create(400, 700, 'ground').setScale(1).refreshBody();
    // this.load.sprite
    // // cannonBall = this.add.sprite(500, 700, 'cannonBall');
    // // cannonBall.scale.setTo(0.5, 0.5);
}

function update() {

}












// var config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     backgroundColor: '#1b1464',
//     physics: {
//         default: 'matter',

//     },
//     scene: {
//         preload: preload,
//         create: create
//     }
// };

// var game = new Phaser.Game(config);

// function preload ()
// {
//     this.load.image('block', 'assets/sprites/block.png');
//     this.load.image('mushroom', 'assets/sprites/mushroom2.png');
// }

// function create ()
// {
//     this.matter.world.setBounds();

//     //  Add a few blocks, you can drag all of these with the pointer

//     var canDrag = this.matter.world.nextGroup();

//     this.matter.add.image(100, 100, 'block', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(canDrag);
//     this.matter.add.image(300, 100, 'block', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(canDrag);
//     this.matter.add.image(600, 100, 'block', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(canDrag);

//     //  Add some mushrooms, you cannot drag these

//     var noDrag = this.matter.world.nextGroup();

//     this.matter.add.image(200, 100, 'mushroom', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(noDrag);
//     this.matter.add.image(400, 100, 'mushroom', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(noDrag);
//     this.matter.add.image(500, 100, 'mushroom', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(noDrag);

//     //  Our constraint

//     this.matter.add.mouseSpring({ length: 1, stiffness: 0.6, collisionFilter: { group: canDrag } });
// }
