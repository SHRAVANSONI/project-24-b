class Ball {
    constructor(x, y,r ) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.1
      }
      this.body = Bodies.circle(x, y, r, options);
      //this.width =50;
      //this.height =50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //pos.x=mouseX;
      //pos.y=mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("blue");
      fill("white");
      ellipse(0, 0, this.circleRadius);
      pop();
    }
  };