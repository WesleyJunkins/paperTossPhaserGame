const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
}) //This initializes the phaser game object. The first parameters are window sizes and general phaser stuff. Then you have to have the three functions.


//The main code for the game goes inside these functions.
function preload() {
    //Here, we want the game to preload all of our assets.
    game.load.image('background', 'assets/background.png') //Find and upload a background image.
    // game.load.image('trashCan', 'assets/trashCan.png') //Find and upload a trashcan image.
    // game.load.spritesheet('paper', 'assets/paper.png') //Find and upload a paper spritesheet that will turn as it is thrown.
    // game.load.spritesheet('specialPaper', 'assets/specialPaper') //Find out how to make a spritesheet. Then, make one of my face that turns as it is thrown. Then, if the user gets three in a row, use this paper once.
    // game.load.image('leftFan', 'assets/leftFan') //Find and upload a fan image.
    // game.load.image('rightFan', 'assets/rightFan') //Reverse the picture of the fan I found previously.


}

function create() {
    //Here, we want the images and things we have preloaded to be displayed on the screen.
    // game.physics.startSystem(Phaser.Physics.ARCADE) //Load the basic phaser arcade physics.
    game.add.image(300, 400, 'background') //Add our background image to the the display.
    // game.add.image(0, 0, 'trashCan') //Add our trashcan to somewhere in the middle of the room.
}

function update() {

}








