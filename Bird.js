function Bird () {
    // where the bird going to be on the x and y axis
        this.y = height/2
        this.x = 64;
        this.image = loadImage("bird_Img.png");
     
    // the properties that are going to be inside the bird. Gravity acting as a gravitational pull to bring the bird body back down,
     // lift is rasing the bird body to reach a higher position, and velocity is the rate of speed the bird body is traveling
        this.gravity = 0.9;   
        this.lift = -15
        this.velocity = 0;

// to display the design of the bird
    this.show = function() {
           fill(random(0,144), random(0,123), random(0,200))
           // ellipse(this.x, this.y, 32, 32)
           image(this.image, this.x, this.y,40,40)
       
        }

// the function to raise the bird body.The velocity and lift vaules are added together to form the speed the bird body is going once in the air
    this.up = function(){
        this.velocity+= this.lift;
        print(this.velocity)
    }

// 
     this.update = function(){
// the velocity or speed is changing depending on the gravity
        this.velocity += this.gravity
// this.y changes by the velocity
        this.y += this.velocity;  
        this.velocity *= 0.9;
    
// if this.y is greater than the canvas height then the bird will fall from anwhere on the y axis and the velocity will be 0
        if(this.y > height){
            this.y = height;
            this.velocity = 0;
        }
// if this.y is less than 0 then the bird will stay on ground and the velocity still equals 0
        if(this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
        }
     
}