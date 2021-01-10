function Pipe (){
    
// to ensure the height of the pipes at the top will be chosen randomly
    this.top = random(height/2)
// to ensure the height of the pipes at the bottom will be chosen randomly
    this.bottom = random(height/2)
// where the pipes will start depending on the canvas width
    this.x=width
// the width of the pipes
    this.w = 20
// the speed of the pipes
    this.speed=10

    this.highlight=false
    this.title = createElement('h1');
  

   this.hide = function(){
        pipes.hide();
        bird.hide();
      }
    // if bird is less than top or greater than height minus the bottom then the bird is hiting the pipes
    this.hits = function(bird){
        if(bird.y <  this.top || bird.y > height -  this.bottom){
         if(bird.x> this.x && this.x< this.x + this.w){
             this.highlight =true;
             this.title.html("Game Over!");
             this.title.position(displayWidth/2 - 450, 0);
             return true;
         }
       
         this.highlight=false;
          return false;
        }
        //console.log("Game Over")
      
    }

     // to display the design of the pipes
     this.show = function(){
        fill(255)
          if(this.highlight){
              fill(255,0,0)
          }
          rect(this.x, 0 , this.w, this.top)
          rect(this.x, height-this.bottom , this.w, this.bottom)

          camera.position.x = displayHeight/2
      }

// to update the properties that will constantly be changing
    this.update = function(){
        this.x -= this.speed
    }
// when the pipes are off the creen those pipes will be deleted from the array
    this.offscreen = function() {
        if(this.x< -this.w){
          return true;
        }else{
          return false;
        }
      }
}