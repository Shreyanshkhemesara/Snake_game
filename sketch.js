var s;
var score = 0;
var scl = 20;
var scl_s = 20;
var food;
function setup(){
    createCanvas(800,700);  
    s = new Snake();
    frameRate(10)
    pickLocation();
}

function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    // food.x = (random(cols));
    // food.y = (random(rows));
    food = createVector(floor(random(cols)), floor(random(rows)))
    food.mult(scl);
}


function draw(){
    background('black');
    s.update();
    s.show();
    s.dead()
    // document.getElementById("scorebaaji").innerHTML = toString(score);
    if (s.eat(food)){
        // s.score++;
        console.log('score: ', score);
        pickLocation();
        // s.total = s.total +1;
        // scl_s = scl_s + 10;
    }
    fill(255,0,100);
    rect(food.x, food.y, scl, scl);    
}
var ua=0;
var da=0;
var ra=0;
var la=0;
function keyPressed(){
    if(keyCode == UP_ARROW && da==0){
        ua=1;
        da=0;
        ra=0;
        la=0;
        s.dir(0,-1);
    }
    if(keyCode == DOWN_ARROW && ua==0){
        ua=0;
        da=1;
        ra=0;
        la=0;
        s.dir(0,+1);
    }
    if(keyCode == RIGHT_ARROW&&la==0){
        ua=0;
        da=0;
        ra=1;
        la=0;
        s.dir(1,0);
    }
    if(keyCode == LEFT_ARROW && ra==0){
        ua=0;
        da=0;
        ra=0;
        la=1;
        s.dir(-1,0);
    }
}