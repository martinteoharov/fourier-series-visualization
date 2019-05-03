var dimX = 720, dimY = 400;
var x = dimX/4, y = dimY/2, r = 80;
var time = 0;

var movX = 0, movY = 0;
var movX2 = 0, movY2 = 0;
var movX3 = 0, movY3 = 0;
var lineX = 400;

var points = [1000];

function setup() {
	createCanvas(dimX, dimY);
}

function draw() {
	clear();
	background(51);

	circles(2);

	beginShape();
	noFill();
	for( var i = 0; i < points.length; i ++ ){
		vertex(lineX + i, points[i]);
	}
	endShape();

	if( points.length > 250 ){
		points.pop();
	}
	
	time += 0.05;
}
function circles(count){

	stroke(255);
	noFill();
	circle(x, y, r);

	stroke(255);
	noFill();
	circle(movX, movY, r/2);
	movX = r*cos(time) + x;
	movY = r*sin(time) + y;
	
	stroke(255);
	line(x, y, movX, movY);

	movX2 = r/2*3*cos(time*3)/3 + movX;
	movY2 = r/2*3*sin(time*3)/3 + movY;
	circle(movX2, movY2, r/4);

	movX3 = r/4*5*cos(time*5)/5 + movX2;
	movY3 = r/4*5*sin(time*5)/5 + movY2;
	circle(movX3, movY3, r/8);
	points.unshift(movY3);

	stroke(255);
	line(movX, movY, movX2, movY2);
	
	stroke(255);
	line(movX3, movY3, lineX, movY3);
}

