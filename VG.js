hi
let game;
let platforms;  // a group of platform objects the player will jump on
let player; // the actual player controlled sprite
let cursors;
let platformCount = 0;
let emitter;
let particles;
let gameOptions = {
  width: 480,
  height: 640,
  gravity: 800
}

class JumpScene extends Phaser.Scene {
  constructor() {
    super({ key: 'JumpScene' })
  }

  preload(){
    this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Codey+Jump/platform.png');
    this.load.image('stripe', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Codey+Jump/stripe.png');
    this.load.spritesheet("codey", "https://blogs.sas.com/content/sastraining/files/2015/03/black_background.png", {
      frameWidth: 90,
      frameHeight: 90
    });
  }


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }

let config = {
  type: Phaser.AUTO,
  width: gameOptions.width,
  height: gameOptions.height,
  backgroundColor: '##cd4a58',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: gameOptions.gravity },
    }
  },
  scene: JumpScene,
};

game = new Phaser.Game(config);


// With this function, we move the platforms lower until they're off screen and then we reposition
// them above the screen to create an endless effect.
function updateY(platform){
  let delta = Math.floor(gameOptions.height/2) - player.y;  // we want to keep the player somewhere in the center of the screen so we'll measure the difference from the center y

  if(delta > 0){ 
    platform.y += delta/30; //the delta may be too large so I'll make it smaller by dividing it by 30
  }

  if(platform.y > 630){
    platform.y = -platform.height;
    platform.x = Math.floor(Math.random() * 400) + 24;
    platformCount += 1;
  }
}
  
