var s;
var score = 0;
var highScore=0;
var scl = 20;
var scl_s = 20;
var food;
function setup(){
    createCanvas(600,600);  
    s = new Snake();
    frameRate(5)
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
    if(s.dead()){
        console.log("dead at sketch")
        console.log(highScore);
        score = 0;
    }
    s.dead()
    // document.getElementById("scorebaaji").innerHTML = toString(score);
    if (s.eat(food)){
        score++;
        console.log('score: ', score);
        pickLocation();
        // s.total = s.total +1;
        // scl_s = scl_s + 10;
    }
    highScore = Math.max(score, highScore);
    scoreD.innerHTML = "Score: " + score + "<br />" + "High Score: "+ highScore;
    console.log("here highscore: "+ highScore)
    fill(255,0,100);
    rect(food.x, food.y, scl, scl);    
}
var ua=0;
var da=0;
var ra=0;
var la=0;
function keyPressed(){
    // the ua da ra la are for the purpose so that "snake can not move to the opposite direction that is :
    // moving downword, the snake can not immediately move upward and same for the left right direction"
    if(keyCode == UP_ARROW || keyCode===119 && da==0){
        ua=1;
        da=0;
        ra=0;
        la=0;
        s.dir(0,-1);
    }
    if(keyCode == DOWN_ARROW || keyCode==='s' && ua==0){
        ua=0;
        da=1;
        ra=0;
        la=0;
        s.dir(0,+1);
    }
    if(keyCode == RIGHT_ARROW || keyCode==='d'&&la==0){
        ua=0;
        da=0;
        ra=1;
        la=0;
        s.dir(1,0);
    }
    if(keyCode == LEFT_ARROW || keyCode==='a'&& ra==0){
        ua=0;
        da=0;
        ra=0;
        la=1;
        s.dir(-1,0);
    }
}