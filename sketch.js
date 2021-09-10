// Variables for Player 1
var Player1;
var Player1_win,Player1_win_still;
var Player1_LS_lose_still;
    // Left Side
    var Player1_LS_anim_norm;
    var Player1_LS_anim_move_right,Player1_LS_anim_move_left;
    var Player1_LS_anim_jump,Player1_LS_anim_crouch;
    var Player1_LS_anim_punch,Player1_LS_anim_kick;
    var Player2_LS_block_still;
    // Right Side
    var Player1_RS_anim_norm;
    var Player1_RS_anim_move_right,Player1_RS_anim_move_left;
    var Player1_RS_anim_jump,Player1_RS_anim_crouch;
    var Player1_RS_anim_punch,Player1_RS_anim_kick;
    var Player2_RS_block_still;

// Variables for Player 2
var Player2;
var Player2_win;
var Player2_LS_lose_still;
    // Left Side
    var Player2_LS_anim_norm;
    var Player2_LS_anim_move_right,Player2_LS_anim_move_left;
    var Player2_LS_anim_jump,Player2_LS_anim_crouch;
    var Player2_LS_anim_punch,Player2_LS_anim_kick;
    var Player2_LS_block_still;
    // Right Side
    var Player2_RS_anim_norm;
    var Player2_RS_anim_move_right,Player2_RS_anim_move_left;
    var Player2_RS_anim_jump,Player2_RS_anim_crouch;
    var Player2_RS_anim_punch,Player2_RS_anim_kick;
    var Player2_RS_block_still;

// Buttons for playing in mobile

var Lbtn1,Rbtn1,UPbtn1,DWbtn1;
var UImg1,RImg1,LImg1,DImg1;
var punch1,punchImg1;
var kick1,kickImg1;
var block1,blockImg1;

// Buttons for playing in mobile
var Lbtn2,Rbtn2,UPbtn2,DWbtn2;
var UImg2,RImg2,LImg2,DImg2;
var punch2,punchImg2;
var kick2,kickImg2;
var block2,blockImg2;

// Variable for Ground
var invisibleGround;

// Health
var health1;
var health2;
var healthBar1,healthBlock1;
var healthLevel1;
var healthBar2;
var healthLevel2,healthBlock2;

var bmode1 = 0;
var bmode2 = 0;

// Gamestates
var gameState;
var play;
var start;
var redWin;
var blueWin;

function preload() {

  // Background Image

  BG = loadImage("arena.jpg");

  // Player 1 Images for Left Side

  Player1_LS_anim_norm = loadAnimation("Images/Player1/Left/Norm/0.png","Images/Player1/Left/Norm/1.png",
  "Images/Player1/Left/Norm/2.png","Images/Player1/Left/Norm/3.png","Images/Player1/Left/Norm/4.png",
  "Images/Player1/Left/Norm/5.png","Images/Player1/Left/Norm/6.png","Images/Player1/Left/Norm/7.png",
  "Images/Player1/Left/Norm/8.png","Images/Player1/Left/Norm/9.png");

  Player1_LS_anim_move_right = loadAnimation("Images/Player1/Left/Move_right/0.png",
  "Images/Player1/Left/Move_right/1.png","Images/Player1/Left/Move_right/2.png",
  "Images/Player1/Left/Move_right/3.png","Images/Player1/Left/Move_right/4.png",
  "Images/Player1/Left/Move_right/5.png","Images/Player1/Left/Move_right/6.png",
  "Images/Player1/Left/Move_right/7.png","Images/Player1/Left/Move_right/8.png");

  Player1_LS_anim_move_left = loadAnimation("Images/Player1/Left/Move_left/0.png",
  "Images/Player1/Left/Move_left/1.png","Images/Player1/Left/Move_left/2.png",
  "Images/Player1/Left/Move_left/3.png","Images/Player1/Left/Move_left/4.png",
  "Images/Player1/Left/Move_left/5.png","Images/Player1/Left/Move_left/6.png",
  "Images/Player1/Left/Move_left/7.png","Images/Player1/Left/Move_left/8.png");

  Player1_LS_anim_jump = loadAnimation("Images/Player1/Left/Jump/0.png",
  "Images/Player1/Left/Jump/1.png","Images/Player1/Left/Jump/2.png","Images/Player1/Left/Jump/3.png",
  "Images/Player1/Left/Jump/4.png");

  Player1_LS_anim_punch = loadAnimation("Images/Player1/Left/Punch/0.png","Images/Player1/Left/Punch/1.png",
  "Images/Player1/Left/Punch/2.png","Images/Player1/Left/Punch/3.png","Images/Player1/Left/Punch/4.png");

  Player1_LS_anim_kick = loadAnimation("Images/Player1/Left/Kick/0.png","Images/Player1/Left/Kick/1.png",
  "Images/Player1/Left/Kick/2.png","Images/Player1/Left/Kick/3.png","Images/Player1/Left/Kick/4.png",
  "Images/Player1/Left/Kick/5.png");

  Player1_LS_anim_crouch = loadAnimation("Images/Player1/Left/Crouch/0.png","Images/Player1/Left/Crouch/1.png",
  "Images/Player1/Left/Crouch/2.png");

  Player1_LS_crouch_still = loadAnimation("Images/Player1/Left/Crouch/2.png");

  Player1_LS_block_still = loadAnimation("Images/Block/Player1/Left/2.png");

  Player1_LS_lose_still = loadAnimation("Images/Lose/Player1/Left/8.png");

  // Player 1 Images for Right Side

  Player1_RS_anim_norm = loadAnimation("Images/Player1/Right/Norm/0.png","Images/Player1/Right/Norm/1.png",
  "Images/Player1/Right/Norm/2.png","Images/Player1/Right/Norm/3.png","Images/Player1/Right/Norm/4.png",
  "Images/Player1/Right/Norm/5.png","Images/Player1/Right/Norm/6.png","Images/Player1/Right/Norm/7.png",
  "Images/Player1/Right/Norm/8.png");

  Player1_RS_anim_move_right = loadAnimation("Images/Player1/Right/Move_right/0.png",
  "Images/Player1/Right/Move_right/1.png","Images/Player1/Right/Move_right/2.png",
  "Images/Player1/Right/Move_right/3.png","Images/Player1/Right/Move_right/4.png",
  "Images/Player1/Right/Move_right/5.png","Images/Player1/Right/Move_right/6.png",
  "Images/Player1/Right/Move_right/7.png","Images/Player1/Right/Move_right/8.png");

  Player1_RS_anim_move_left = loadAnimation("Images/Player1/Right/Move_left/0.png",
  "Images/Player1/Right/Move_left/1.png","Images/Player1/Right/Move_left/2.png",
  "Images/Player1/Right/Move_left/2.png","Images/Player1/Right/Move_left/4.png",
  "Images/Player1/Right/Move_left/5.png","Images/Player1/Right/Move_left/6.png",
  "Images/Player1/Right/Move_left/7.png","Images/Player1/Right/Move_left/8.png");

  Player1_RS_anim_jump = loadAnimation("Images/Player1/Right/Jump/0.png",
  "Images/Player1/Right/Jump/1.png","Images/Player1/Right/Jump/2.png","Images/Player1/Right/Jump/3.png",
  "Images/Player1/Right/Jump/4.png");

  Player1_RS_anim_punch = loadAnimation("Images/Player1/Right/Punch/0.png","Images/Player1/Right/Punch/1.png",
  "Images/Player1/Right/Punch/2.png","Images/Player1/Right/Punch/3.png","Images/Player1/Right/Punch/4.png");

  Player1_RS_anim_kick = loadAnimation("Images/Player1/Right/Kick/0.png","Images/Player1/Right/Kick/1.png",
  "Images/Player1/Right/Kick/2.png","Images/Player1/Right/Kick/3.png","Images/Player1/Right/Kick/4.png",
  "Images/Player1/Right/Kick/5.png");

  Player1_RS_anim_crouch = loadAnimation("Images/Player1/Right/Crouch/0.png","Images/Player1/Right/Crouch/1.png",
  "Images/Player1/Right/Crouch/2.png");

  Player1_RS_crouch_still = loadAnimation("Images/Player1/Right/Crouch/2.png");

  Player1_RS_lose_still = loadAnimation("Images/Lose/Player1/Right/8.png");

  Player1_RS_block_still = loadAnimation("Images/Block/Player1/Right/2.png");

  Player1_win = loadAnimation("Images/Win/Player1/0.png","Images/Win/Player1/1.png","Images/Win/Player1/2.png",
  "Images/Win/Player1/3.png","Images/Win/Player1/4.png","Images/Win/Player1/5.png","Images/Win/Player1/6.png",
  "Images/Win/Player1/7.png","Images/Win/Player1/8.png","Images/Win/Player1/9.png");

  Player1_win_still = loadAnimation("Images/Win/Player1/9.png")
}