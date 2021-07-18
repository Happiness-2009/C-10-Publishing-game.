var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Sophia = createSprite(27,30,18,18);
Sophia.shapeColor="purple";
var wall1 = createSprite(50,15,10,80);
wall1.shapeColor="green";
var wall2 = createSprite(5,70,10,660);
wall2.shapeColor="green";
var wall3 = createSprite(1,135,200,11);
wall3.shapeColor="green";
var wall4 = createSprite(10,90,90,11);
wall4.shapeColor="green";
var wall5 = createSprite(96,110,10,45);
wall5.shapeColor="green";
var wall6 = createSprite(70,5,660,10);
wall6.shapeColor="green";
var wall7 = createSprite(92,50,95,10 );
wall7.shapeColor="green";
var wall8 = createSprite(145,93,10,95 );
wall8.shapeColor="green";
var wall9 = createSprite(100,180,80,10);
wall9.shapeColor="green";
var wall10 = createSprite(54.5,220,10,90);
wall10.shapeColor="green";
var wall11 = createSprite(33,260,45,10);
wall11.shapeColor="green";
var wall12 = createSprite(120,230,35,10);
wall12.shapeColor="green";
var wall13 = createSprite(135,210,10,50);
wall13.shapeColor="green";
var wall14 = createSprite(100,242,10,35);
wall14.shapeColor="green";
var wall15 = createSprite(50,310,100,10);
wall15.shapeColor="green";
var wall16 = createSprite(395, 10,10,790);
wall16.shapeColor="green";
var wall17 = createSprite(190,10,10,260);
wall17.shapeColor="green";
var wall18 = createSprite(260, 135,150,10);
wall18.shapeColor="green";
var wall19 = createSprite(288, 180,205,10);
wall19.shapeColor="green";
var wall20 = createSprite(340, 110, 10,60);
wall20.shapeColor="green";
var wall21 = createSprite(290,85,90, 10);
wall21.shapeColor="green";
var wall22 = createSprite(5,395,800,10);
wall22.shapeColor="green";
var wall23 = createSprite(145, 260,100,10);
wall23.shapeColor="green";
var wall24 = createSprite(100, 351, 110,10);
wall24.shapeColor="green";
var wall25 = createSprite(150,331,10,50);
wall25.shapeColor="green";
var wall26 = createSprite(198, 305,10,100);
wall26.shapeColor="green";
var wall27 = createSprite(245,70,10,40);
wall27.shapeColor="green";
var wall28 = createSprite(244, 265,10,180);
wall28.shapeColor="green";
var wall29 = createSprite(295, 350,90,10);
wall29.shapeColor="green";
var wall30 = createSprite(340, 305,100,10);
wall30.shapeColor="green";
var wall31 = createSprite(295, 270,10,80);
wall31.shapeColor="green";
var target = createSprite(345, 260,25,25);
target.shapeColor="magenta";

function draw() {
background("lime");

if (keyDown("up")) {
  Sophia.velocityX=0;
  Sophia.velocityY=-4;
}
if (keyDown("down")) {
  Sophia.velocityX=0;
  Sophia.velocityY=+4;
}
if (keyDown("left")) {
  Sophia.velocityX=-4;
  Sophia.velocityY=0;
}

if (keyDown("right")) {
  Sophia.velocityX=4;
  Sophia.velocityY=0;
}


createEdgeSprites();

Sophia.bounceOff(wall1);
Sophia.bounceOff(wall2);
Sophia.bounceOff(wall3);
Sophia.bounceOff(wall4);
Sophia.bounceOff(wall5);
Sophia.bounceOff(wall6);
Sophia.bounceOff(wall7);
Sophia.bounceOff(wall8);
Sophia.bounceOff(wall9);
Sophia.bounceOff(wall10);
Sophia.bounceOff(wall11);
Sophia.bounceOff(wall12);
Sophia.bounceOff(wall13);
Sophia.bounceOff(wall14);
Sophia.bounceOff(wall15);
Sophia.bounceOff(wall16);
Sophia.bounceOff(wall17);
Sophia.bounceOff(wall18);
Sophia.bounceOff(wall19);
Sophia.bounceOff(wall20);
Sophia.bounceOff(wall21);
Sophia.bounceOff(wall22);
Sophia.bounceOff(wall23);
Sophia.bounceOff(wall24);
Sophia.bounceOff(wall25);
Sophia.bounceOff(wall26);
Sophia.bounceOff(wall27);
Sophia.bounceOff(wall28);
Sophia.bounceOff(wall29);
Sophia.bounceOff(wall30);
Sophia.bounceOff(wall31);


if (Sophia.collide(target)){
  background("cyan");
textSize(60);
textFont("New Times Roman");
fill("yellow");
stroke("red");
strokeWeight(5);
text("You Won!!",70,100,400,400);
}
drawSprites();
}

























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
