 var bgImg;
 var cat;

function preload() {
 bgImg = loadImage("garden.png")
 catimg1 = loadImage("cat1.png")
 mouseimg1 = loadImage("mouse1.png")
 catimg2 = loadImage("cat2.png , cat3.png")
 mouseimg2 = loadImage("mouse2.png ,mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    var cat = createSprite(100, 100, 50, 50 )
    cat.addImage(catimg1)
    var mouse = createSprite(100, 100, 50, 50 )
    mouse.addImage(mouseimg1)

}

function draw() {

    background(255);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing" , mouseimg2)
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25 ; 
  }


}
