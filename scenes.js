let loy= 0;
var x=1;
var y=500;

////////////////////////////// 1 /////////////////
function intro()  {
  snd1.play();

    this.enter = function()  {

        helpbtnsprite.position.x =  +500;
        helpbtnsprite.position.y =  +400;
        helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);
        snd3.play();
        };
        helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
        helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
        helpbtnsprite.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showScene(scene2);
        };

        startbtnsprite.position.x = width  -500;
        startbtnsprite.position.y = height -280;
        startbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);
        snd3.play();
        };
        startbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
        startbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
        startbtnsprite.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showScene(scene3);
        };

        hfinish.position.x = 900;
        hfinish.position.y = 900;

        charsprite.position.x = width  -900;
        charsprite.position.y = height -800;

        platform.position.x = width  -900;
        platform.position.y = height -900;

        platformS.position.x = width  -900;
        platformS.position.y = height -900;

        platformS2.position.x = 1000;
        platformS2.position.y = 1000;

        platformSS.position.x = 900;
        platformSS.position.y = 900;

        platformSSS.position.x = 900;
        platformSSS.position.y = 900;

        platformL.position.x = width  -900;
        platformL.position.y = height -900;

        platformL2.position.x = 900;
        platformL2.position.y = 900;

        item2.position.x = 900;
        item2.position.y = 900;

        item3.position.x = 900;
        item3.position.y = 900;

        item4.position.x = 900;
        item4.position.y = 900;

        itemF.position.x = 900;
        itemF.position.y = 900;

        platformSSS2.position.x = 900;
        platformSSS2.position.y = 900;

        platformSSS3.position.x = 900;
        platformSSS3.position.y = 900;

        platformF.position.x = width  -900;
        platformF.position.y = height -900;


      loy = 100;
        background("red");

    }

this.draw = function()
    {
       background(0,0,255);
       image(img1,0,0,width,height);
       image(img4,width/2-230,height/2-150);
        drawSprites();

    }
}

///////////////////////  2  ////////////////////////

function scene2() {

    this.enter = function()  {
        snd2.pause();
        snd4.pause();


        platform.position.x = width  -900;
        platform.position.y = height -900;

        platformS.position.x = width  -900;
        platformS.position.y = height -900;

        platformS2.position.x = 1000;
        platformS2.position.y = 1000;

        platformL.position.x = width  -900;
        platformL.position.y = height -900;

        platformL2.position.x = 900;
        platformL2.position.y = 900;

        platformSS.position.x = 900;
        platformSS.position.y = 900;

        platformSSS.position.x = 900;
        platformSSS.position.y = 900;

        platformSSS2.position.x = 900;
        platformSSS2.position.y = 900;

        platformSSS3.position.x = 900;
        platformSSS3.position.y = 900;

        charsprite.position.x = width  -900;
        charsprite.position.y = height -800;

        platform.position.x = width  -800;
        platform.position.y = height -800;

        platformF.position.x = width  -900;
        platformF.position.y = height -900;

        helpbtnsprite.position.x = width  -800;
        helpbtnsprite.position.y = height -800;

        item1.position.x = 900;
        item1.position.y = 900;

        item2.position.x = 900;
        item2.position.y = 900;

        item3.position.x = 900;
        item3.position.y = 900;

        item4.position.x = 900;
        item4.position.y = 900;

        itemF.position.x = 900;
        itemF.position.y = 900;

        hfinish.position.x = 900;
        hfinish.position.y = 900;

        helpt.position.x =  width/2;
        helpt.position.y =  height/2;

        startbtnsprite.position.x = width  -100;
        startbtnsprite.position.y = height -80;

    }

    this.draw = function() {
      background(0,0,255);
      image(img2,0,0,width,height);
      drawSprites();
    }
}

////////////////////////////// 3 /////////////////

function scene3()  {

this.setup = function() {

  }

  this.enter = function()
  {

      snd4.pause();

      helpt.position.x =  900;
      helpt.position.y =  900;

      platform.position.x =   150;
      platform.position.y =  600;

      platformS.position.x =  700;
      platformS.position.y =  150;

      platformS2.position.x = 900;
      platformS2.position.y = 280;

      platformSS.position.x = 460;
      platformSS.position.y = 230;

      platformSSS.position.x = 350;
      platformSSS.position.y = 500;

      platformL.position.x =  200;
      platformL.position.y =  280;

      platformL2.position.x = 550;
      platformL2.position.y = 420;

      platformSSS2.position.x = 750;
      platformSSS2.position.y = 350;

      platformSSS3.position.x = 40;
      platformSSS3.position.y = 160;

      platformF.position.x = 220;
      platformF.position.y = 100;

      charsprite.position.x = width  -780;
      charsprite.position.y = height -40;

      startbtnsprite.position.x = width  -800;
      startbtnsprite.position.y = height -800;

      item1.position.x = 550;
      item1.position.y = 380;

      item2.position.x = 200;
      item2.position.y = 240;

      item3.position.x = 900;
      item3.position.y = 240;

      item4.position.x = 42;
      item4.position.y = 120;


    { helpbtnsprite.position.x = 50;
      helpbtnsprite.position.y = height -580;
      helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);
      snd3.play();
      };
      helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
      helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
      helpbtnsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        mgr.showScene(scene2);
      };
    }


  }

    this.draw = function()
    {
      background(0);
      image(img3,0,0,width,height);

      charsprite.velocity.y += gravity;

      if (charsprite.position.y > 600){
        charsprite.position.x =  80;
        charsprite.position.y = height -40;
      }

      collection();
      collides();
      checkKeys();
      drawSprites();


    }
}

/////////////////////////////////////4///////////////////
