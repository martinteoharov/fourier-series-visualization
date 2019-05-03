var dimX = 720, dimY = 400;
var x = dimX/4, y = dimY/2, r = 80;
var time = 0;

var movX = 0, movY = 0;

function setup() {
	createCanvas(dimX, dimY);
}

function draw() {
	clear();
	background(51);

	stroke(255);
	noFill();
	circle(x, y, r);
	
	stroke(40);
	fill(255);
	circle(movX, movY, 5);
	//movX++;movY++;
	movX = r*cos(time) + x;
	movY = r*sin(time) + y;
		

	
	time += 0.05;
}
