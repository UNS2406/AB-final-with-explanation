class Bird extends BaseClass {
  //construction of bird using matter.js
  constructor(xInput, yInput) {
    super(xInput, yInput, 50, 50);
    this.image = loadImage("images/bird.png");

    this.trajectory = []; //empty array which will store position of bird as long as it flying
    this.smokeImage = loadImage("images/smoke.png");

    /* //sample array
     var sample = [65, 324436, "AVANI", [555, 777], 34, 980, "uttara"];

     //push(): Add items to the end of an array
     sample.push(999);
     
     //pop(): Remove an item from the end of an array
     sample.pop()

     //unshift(): Add items to the beginning of an array
     sample.unshift(999);

     //shift(): Remove an item from the beginning of an array
     sample.shift();

     console.log(sample);
      console.log("1 index of array SAMPLE: sample[1] :  "+sample[1]);

      console.log("3 index of array SAMPLE: sample[3] :  "+sample[3]);

      console.log("1 index of 3 index of array SAMPLE: sample[3][1] :  "+sample[3][1]);
      console.log("0 index of 3 index of array SAMPLE: sample[3][0] :  "+sample[3][0]);

     */

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    // console.log(this.body.speed);
    //console.log(this.body.position.x);
    // console.log(this.trajectory);


    if (this.body.position.x > 250 && this.body.speed > 5) {
      console.log("inside condition");
      var position = [this.body.position.x, this.body.position.y];

      this.trajectory.push(position); //adding position array on each index of trajectory array
    }

    /*
      trajectory =[ [x0,y0], [x1,y1], [x2,y2], [x3,y3]............      ]
  
      loop is running over each value of index of trajectory array
      at every index of trajectory, a position array is saved which contains 2 items--- 0 index: x value, 1 index: y value
    */
    for (var i = 0; i < this.trajectory.length; i++) {
      //image function is used to draw an image
      //image(img variable which contains the path of the image file, x, y, width, height);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }


  }
}