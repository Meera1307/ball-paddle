var ball;
var paddle;

function preload() {

  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);

  ball = createSprite(200, 200, 10, 10);
  ball.addImage(ballImage);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

  paddle = createSprite(350, 200, 10, 10);
  paddle.addImage(paddleImage);


  
  ball.bounceOff(paddle);

}

function draw() {
  background(205, 153, 0);




  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */


  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */

  /* Prevent the paddle from going out of the edges */


  if (keyDown(UP_ARROW)) {
    paddle.y = paddle.y - 2;
  }
  if (keyDown(DOWN_ARROW)) {
    paddle.y = paddle.y + 2;
  }
  
  
  edges = createEdgeSprites();
   /* Allow the ball to bounceoff from the paddle */
    ball.bounceOff(paddle,randomVelocity);
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[2]);
    

drawSprites();

}

function randomVelocity() {
  ball.velocityY = random(-4,4)
  
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}