var snd1,snd2,snd3,snd4;
var img1,img2,img3,img4,img5;
var spr;
var startbtnanim, startbtnsprite;
var helpbtnanim, helpbtnsprite;
var charsprite;
var gravity= 1;
var jump = 12;
var score = 0;

function preload() {

  snd1 = loadSound("assets/bgm.mp3");
  snd2 = loadSound("assets/jump.flac");
  snd3 = loadSound("assets/collect.mp3");
  snd4 = loadSound("assets/s4.mp3");
  img1 = loadImage("assets/pinksky.png");
  img2 = loadImage("assets/forest2.png");
  img3 = loadImage("assets/grass.png");
  img4 = loadImage("assets/title.png");

  helpbtnanim = loadAnimation('assets/he1.png',
  'assets/h2.png');
  helpbtnsprite = createSprite(-500,0); //create and move 'off stage'
  helpbtnsprite.addAnimation('normal',helpbtnanim);

  startbtnanim = loadAnimation('assets/st1.png',
  'assets/s2.png');
  startbtnsprite = createSprite(-500,0);
  startbtnsprite.addAnimation('normal',startbtnanim);

  charspriteanim = loadAnimation('assets/char3.png');
  charsprite = createSprite(-500,0);
  charsprite.addAnimation('moving',charspriteanim);

  itemanim = loadAnimation('assets/heart.png', 'assets/heartsm.png');
  item1 = createSprite(-500,0);
  item1.addAnimation('moving',itemanim);

  helptanim = loadAnimation('assets/helpt1.png');
  helpt = createSprite(-500,0);
  helpt.addAnimation('moving',helptanim);

}

var mgr;

function setup() {
    createCanvas(1000, 600);
     mgr = new SceneManager();

     snd1.loop();

    mgr.addScene (intro);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.showNextScene();



    helpbtnsprite.animation.stop();
    startbtnsprite.animation.stop();

    charsprite = createSprite(30,550);
    charsprite.addAnimation('normal', 'assets/char3.png');

    platform = createSprite(150,630);
    platform.addAnimation('normal', 'assets/platform1.png')

    platformS = createSprite(0,0);
    platformS.addAnimation('normal', 'assets/platformS.png')

    platformS2 = createSprite(0,0);
    platformS2.addAnimation('normal', 'assets/platformS.png')

    platformSS = createSprite(0,0);
    platformSS.addAnimation('normal', 'assets/platformSS.png')

    platformSSS = createSprite(0,0);
    platformSSS.addAnimation('normal', 'assets/platformSSS.png')

    platformSSS2 = createSprite(0,0);
    platformSSS2.addAnimation('normal', 'assets/platformSSS.png')

    platformSSS3 = createSprite(0,0);
    platformSSS3.addAnimation('normal', 'assets/platformSSS.png')

    platformL = createSprite(0,0);
    platformL.addAnimation('normal', 'assets/platformL.png')

    platformL2 = createSprite(0,0);
    platformL2.addAnimation('normal', 'assets/platformL.png')

    platformF = createSprite(0,0);
    platformF.addAnimation('normal', 'assets/platformSS.png')

    item2 = createSprite(0,0);
    item2.addAnimation('normal', 'assets/heart.png', 'assets/heartsm.png')

    item3 = createSprite(0,0);
    item3.addAnimation('normal', 'assets/heart.png', 'assets/heartsm.png')

    item4 = createSprite(0,0);
    item4.addAnimation('normal', 'assets/heart.png', 'assets/heartsm.png')

    itemF = createSprite(0,0);
    itemF.addAnimation('normal', 'assets/heart.png', 'assets/heartsm.png')

    hfinishanim = loadAnimation('assets/heart1.png', 'assets/heart2.png',
    'assets/heart3.png', 'assets/heart4.png');
    hfinish = createSprite (220,50);
    hfinish.addAnimation('moving', hfinishanim);

}

function draw()
{
    mgr.draw();
}

function mousePressed()
{
  mgr.mousePressed();
}

function keyPressed()
{
mgr.keyPressed();
}

function loadAndShowStartBtn() {

  startbtnsprite.position.x = width  -200;
  startbtnsprite.position.y = height -200;
  startbtnsprite.animation.stop();

  startbtnsprite.onMouseOver = function() {
      this.animation.goToFrame(1);
  };

  startbtnsprite.onMouseOut = function() {
     this.animation.goToFrame(0);
  };

  startbtnsprite.onMousePressed = function() {
      this.animation.goToFrame(2);
  };

  startbtnsprite.onMouseReleased = function() {
    this.animation.goToFrame(2);
  };

}

function checkKeys() {

  if (keyIsDown(LEFT_ARROW)) {
    charsprite.mirrorX(1);
    charsprite.changeAnimation('moving');
    charsprite.velocity.x = -3;
  }

   else if (keyIsDown(RIGHT_ARROW)) {
    charsprite.mirrorX(-1);
    charsprite.changeAnimation('moving');
    charsprite.velocity.x = +3;
  } else {
    charsprite.velocity.x = 0;
  }
}

function collection() {

  if(charsprite.overlap(item1)){
    item1.remove();
  }

  if(charsprite.overlap(item2)){
    item2.remove();
  }

  if(charsprite.overlap(item3)){
    item3.remove();
  }

  if(charsprite.overlap(item4)){
    item4.remove();

    itemF = createSprite(220,50);
    itemF.addAnimation('normal', 'assets/heart.png', 'assets/heartsm.png')

    hfinishanim = loadAnimation('assets/heart1.png', 'assets/heart2.png',
    'assets/heart3.png', 'assets/heart4.png');
    hfinish = createSprite (220,50);
    hfinish.addAnimation('moving', hfinishanim);


  }

  if(charsprite.overlap(itemF)){
    win = createSprite(width/2,height/2);
    win.addAnimation('normal', 'assets/win.png');

  }


}

function collides(){
  if(charsprite.collide(platform)){
    charsprite.velocity.y=0;
  }

  if(charsprite.collide(platformS)){
    charsprite.velocity.y=0;
  }

  if(charsprite.collide(platformSS)){
    charsprite.velocity.y=0;
  }

  if(charsprite.collide(platformS2)){
    charsprite.velocity.y=0;
  }

  if(charsprite.collide(platformL)){
    charsprite.velocity.y=0;
  }

  if(charsprite.collide(platformL2)){
    charsprite.velocity.y=0;
  }

  if(charsprite.collide(platformSSS)){
    charsprite.velocity.y=0;
  }

  if(charsprite.collide(platformSSS2)){
    charsprite.velocity.y=0;
  }

  if(charsprite.collide(platformSSS3)){
    charsprite.velocity.y=0;
  }

  if(charsprite.collide(platformF)){
    charsprite.velocity.y=0;
  }

  if(keyWentDown(' ')) {
    charsprite.animation.rewind();
    charsprite.velocity.y = -jump;
    snd2.play();
  }
}


function removeAllSprites() {
  startbtnsprite.position.x =  -500;
  startbtnsprite.position.y =  -500;
  resetbtnsprite.position.x =  -500;
  resetbtnsprite.position.y =  -500;

}
