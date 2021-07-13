class BaseClass {
  //construction of base using matter.js
  constructor(xInput, yInput, widthInput, heightInput, angleInput) {
    var options = {
      'restitution': 0.8,
      'density':1.0,
      'friction':1.0,
    }
    this.width = widthInput;
    this.height = heightInput;
    this.image = loadImage("images/base.png");
    this.body = Bodies.rectangle(xInput, yInput, this.width, this.height, options);
    World.add(userWorld, this.body);
  }
  display() {

    //display of baseclass using matter.js
    var angle = this.body.angle;

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
