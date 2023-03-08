//MATTERjs VERSION
var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    physics: {
        default: 'matter',
        arcade: {
            debug: true,
            gravity: {y: 5}
        },
        matter: {
            debug: true,
            gravity: {y: 2}
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

new Phaser.Game(config);

var score = 0;

function preload () {
    this.load.image('background', 'assets/background.png');
    this.load.image('trashCan', 'assets/trashCan.png');
    this.load.image('ball', 'assets/cannonBall.png');
    this.load.image('red', 'assets/red.png')
}

function create() {
    this.add.image(400, 300, 'background');

    this.matter.world.setBounds();

    var canDrag = this.matter.world.nextGroup();

    var ball = this.matter.add.sprite(400, 0, 'ball', null, { chamfer: 16 });
        ball.setCircle();
        ball.setScale(0.5);
        ball.setBounce(0.3);
        ball.setCollisionGroup(canDrag);
        ball.setIgnoreGravity(true);

    this.matter.add.mouseSpring({length: 1, stiffness: 0.9, collisionFilter: {group: canDrag}});

    trashCan = this.matter.add.sprite(580, 520, 'trashCan').setScale(2).setStatic(true);

    scoreboard = this.add.text(450, 10, 'Score: '+score);

    var particles = this.add.particles('red');

    this.input.on('pointerdown', function(pointer){
        ball.setIgnoreGravity(false);
    })

    this.matter.world.on('collisionactive', function (event, bodyA, bodyB) {
        if((ball.x >= 553.906)&&(ball.x <= 617.649)&&(ball.y >= 445)&&(ball.y <= 465))
        {
            ball.setX(400);
            ball.setY(650);
            ball.setIgnoreGravity(true);
            ball.setVelocity(0);
            var emitter = particles.createEmitter({
                speed: 100,
                scale: { start: 1, end: 0 },
                blendMode: 'ADD'
            });
            particles.setX(580);
            particles.setY(520);
            emitter.emitParticle();
            emitter.emitParticle();
            emitter.emitParticle();
            emitter.emitParticle();
            emitter.emitParticle();
            emitter.startFollow(trashCan);
            score = score + 1;
            scoreboard.setText('Score: '+score);
        }
        else
        {
            ball.setX(400);
            ball.setY(650);
            ball.setIgnoreGravity(true);
            ball.setVelocity(0);
        }
    });

}

function update() {
    scoreboard.setText("Score: "+score);
}















































        // else if((ball.x >= 650.0) || (ball.y >= 680.0))
        // {
        //     ball.setX(400);
        //     ball.setY(500);
        //     ball.setIgnoreGravity(true);
        //     ball.setVelocity(0);
        // }












































// ARCADE VERSION
// var config = {
//     type: Phaser.AUTO,
//     width: 1000,
//     height: 700,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             debug: true,
//             gravity: {y: 5}
//         },
//         matter: {
//             debug: true
//         }
//     },
//     scene: {
//         preload: preload,
//         create: create,
//         update: update
//     }
// };

// new Phaser.Game(config);

// var inZone = false;
// var score = 1;

// function preload () {
//     this.load.image('background', 'assets/background.png');
//     this.load.image('trashCan', 'assets/trashCan.png');
//     this.load.image('ball', 'assets/cannonBall.png');
// }

// function create() {
//     this.physics.world.gravity.y = 60;
//     this.add.image(400, 300, 'background');

//     var ball = this.physics.add.image(400, 500, 'ball');                    //Create a ball object. Since gravity is set globally, it will be affected by gravity.
//         ball.setCollideWorldBounds(true);
//         ball.setCircle(29);
//         ball.setMass(500);

//     var trashCan = this.physics.add.image(580, 520, 'trashCan');            //Create a trash can object. Set it to immovable and don't allow gravity so that it will just be a stationary object.
//         trashCan.setImmovable(true);
//         trashCan.body.setAllowGravity(false);

//     this.physics.add.collider(ball, trashCan, function() {
//         inZone = true;
//     });

//     this.input.setDraggable(ball.setInteractive());

//     this.input.on('dragstart', function(pointer, obj) {
//         obj.body.moves = false;
//     });

//     this.input.on('drag', function(pointer, obj, dragX, dragY) {
//         obj.setPosition(dragX, dragY);
//     });

//     this.input.on('dragend', function(pointer, obj) {
//         obj.body.moves = true;
//     });

//     //How to handle tossing?
// }

// function update() {

//     if(inZone)
//     {
//         console.log("Hit");
//         score = score + 1;
//         inZone = false;
//     }

// }
















































































































































































































































































































































































































































































// this.input.on('pointerdown', this.startDrag, this);
// }

// function startDrag(pointer, targets) {
//     this.input.off('pointerdown', this.startDrag, this);
//     this.dragObj = targets[0];
//     this.input.on('pointermove', this.doDrag, this);
//     this.input.on('pointerup', this.stopDrag, this);
// }

// function doDrag(pointer) {
//     this.dragObj.x = pointer.x;
//     this.dragObj.y = pointer.y;
// }

// function stopDrag(pointer, targets) {
//     this.input.on('pointerdown', this.startDrag, this);
//     this.input.off('pointermove', this.doDrag, this);
//     this.input.off('pointerup', this.stopDrag, this);
// }

















//paper = this.physics.add.sprite(100, 450, 'paper');
// paper.setBounce(0.2);
// paper.setCollideWorldBounds(true);


    //this.load.spritesheet('paper', 'assets/paper.png', {frameWidth: 32, frameHeight: 48});
    //this.load.image('ground', 'assets/ground.png');

// function create(){
//     this.add.image(400, 300, 'background');


//     this.matter.world.setBounds();

//     var canDrag = this.matter.world.nextGroup();

//     this.matter.add.sprite(400, 500, 'ball', null, { chamfer: 16 }).setScale(0.5).setBounce(0.9).setCollisionGroup(canDrag);

//     this.matter.add.mouseSpring({length: 1, stiffness: 0.6, collisionFilter: {group: canDrag}});

//     this.matter.add.sprite(580, 520, 'trashCan').setScale(1.7).setStatic(true);

//     //let ball = this.add.sprite(600, 600, 'ball');

//     //this.physics.arcade.add.collider('ball', 'trashCan');

//     // this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {

//     //     console.log("Hit");
//     //     // bodyA.gameObject.setTint(0xff0000);
//     //     // bodyB.gameObject.setTint(0x00ff00);

//     // });




//     // this.add.image(400, 300, 'background');
//     // platforms = this.physics.add.staticGroup();
//     // platforms.create(400, 700, 'ground').setScale(1).refreshBody();
//     // this.load.sprite
//     // // cannonBall = this.add.sprite(500, 700, 'cannonBall');
//     // // cannonBall.scale.setTo(0.5, 0.5);
// }

// function update() {
//     //this.physics.arcade.collide('ball', 'trashCan');

// }












// // var config = {
// //     type: Phaser.AUTO,
// //     width: 800,
// //     height: 600,
// //     backgroundColor: '#1b1464',
// //     physics: {
// //         default: 'matter',

// //     },
// //     scene: {
// //         preload: preload,
// //         create: create
// //     }
// // };

// // var game = new Phaser.Game(config);

// // function preload ()
// // {
// //     this.load.image('block', 'assets/sprites/block.png');
// //     this.load.image('mushroom', 'assets/sprites/mushroom2.png');
// // }

// // function create ()
// // {
// //     this.matter.world.setBounds();

// //     //  Add a few blocks, you can drag all of these with the pointer

// //     var canDrag = this.matter.world.nextGroup();

// //     this.matter.add.image(100, 100, 'block', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(canDrag);
// //     this.matter.add.image(300, 100, 'block', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(canDrag);
// //     this.matter.add.image(600, 100, 'block', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(canDrag);

// //     //  Add some mushrooms, you cannot drag these

// //     var noDrag = this.matter.world.nextGroup();

// //     this.matter.add.image(200, 100, 'mushroom', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(noDrag);
// //     this.matter.add.image(400, 100, 'mushroom', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(noDrag);
// //     this.matter.add.image(500, 100, 'mushroom', null, { chamfer: 16 }).setBounce(0.9).setCollisionGroup(noDrag);

// //     //  Our constraint

// //     this.matter.add.mouseSpring({ length: 1, stiffness: 0.6, collisionFilter: { group: canDrag } });
// // }






































// // var config = {
// //     type: Phaser.AUTO,
// //     width: 800,
// //     height: 600,
// //     backgroundColor: '#1b1464',
// //     parent: 'phaser-example',
// //     physics: {
// //         default: 'matter',
// //         matter: {
// //             gravity: {
// //                 x: 0,
// //                 y: 0
// //             }
// //         }
// //     },
// //     scene: {
// //         preload: preload,
// //         create: create
// //     }
// // };

// // var game = new Phaser.Game(config);

// // function preload ()
// // {
// //     this.load.image('block', 'assets/sprites/block.png');
// // }

// // function create ()
// // {
// //     var blockA = this.matter.add.image(0, 300, 'block').setBounce(1).setFriction(0);

// //     var blockB = this.matter.add.image(600, 300, 'block').setStatic(true);

// //     blockA.setVelocityX(10);

// //     this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {

// //         bodyA.gameObject.setTint(0xff0000);
// //         bodyB.gameObject.setTint(0x00ff00);

// //     });
// // }


