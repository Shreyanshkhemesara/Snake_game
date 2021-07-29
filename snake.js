function Snake(){
    //initialising the positions and speed
     this.x = 0;
     this.y=0;
     this.xspeed = 1;
     this.yspeed = 0;
     this.total = 0;
     this.tail = [];
     this.update = function(){
         // loopingly movig the snake accordingly
         if(this.total==this.tail.length){
             for(var i=0; i<this.tail.length-1; i++){
                 this.tail[i]=this.tail[i+1];
             }
        }
         this.tail[this.total-1]= createVector(this.x, this.y);
         this.x = this.x + floor(this.xspeed*scl);
         this.y = this.y + floor(this.yspeed*scl);
        //  if(this.x>=600 || this.x >=600 || this.x < 0 || this.y < 0){
        //      this.x = 300;
        //      this.y = 300;
        //  }
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl)
     }
     this.dead = function(){
         for(var i=0; i<this.tail.length; i++){
             var pos = this.tail[i];
             var d = dist(this.x, this.y, pos.x, pos.y);
             if(d<1){
                 console.log("died! in dead function");
                 //  var k = "your score: " + toString(this.total);
                 //  console.log(k)
                //  (window.alert('YOU DIED!'));
                 this.total=0;
                 this.tail = [];
                 console.log("return true");
                 return true;
             }
         }
     }
     this.show = function(){
         fill(0,255,0);
         for(var i=0; i<this.total-1; i++){
             rect(this.tail[i].x, this.tail[i].y, scl, scl);
         }
         rect(this.x, this.y,scl,scl) // creating a rectangele => snake
     }
     
     this.dir= function(x,y){
         //changing the direction of snake
         this.xspeed=x;
         this.yspeed=y;
     }

     this.eat = function(pos){
         //returns if snake reached the food's "pos" (the variable in the function(pos)
        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d<1){
            this.total++;
            // console.log('true');
            return true;
        } else{
            // console.log('false');
            return false;
        }
     }
}