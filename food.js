function food(){
    this.x = floor(random(floor(width/scl))),
    this.y = floor(random((height/scl)))

    this.show = function(){
        fill(255,25,190);
        rect(this.x, this.y,scl, scl);
        // -
    }
}