var bird;
var pipes = [];
var score = 0
 function preload(){
  backgroun_Img = loadImage("background_img.png")
 }

 function setup(){
    canvas = createCanvas(displayWidth/2, displayHeight);
    bird = new Bird;
    pipes.push(new Pipe())
    
    score=0
    
 }

 function draw(){
   background(backgroun_Img)  

   
   textSize(20)
   fill("red")
   text("Score: "+ score, displayWidth/2-100, displayHeight-700);
 
   

   for (var i= pipes.length-1; i >= 0; i-- ){
    pipes[i].show();
    pipes [i].update();

    if(pipes[i].hits(bird)){
      console.log("hit!")
      this.bird.hide()
      this.pipes.hide()
    }

    if(pipes[i].offscreen()){
      pipes.splice(i,1);
    }
  }

  bird.show();
  bird.update();

  if(frameCount % 30 == 0){
    score = score + Math.round(getFrameRate()/3);
    pipes.push(new Pipe())
  }
 
   

   translate(0,0,mouseX);

}

 function keyPressed() {
   if(keyCode === 32){
     bird.up();
    //console.log(32)
   }
 }

 