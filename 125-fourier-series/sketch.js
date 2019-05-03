var dimX = 720, dimY = 400;
var x = dimX/4, y = dimY/2, r = 80;
var time = 0;

var movX = 0, movY = 0;
var movX2 = 0, movY2 = 0;
var movX3 = 0, movY3 = 0;
var lineX = 400;

var cirX = [], cirY = [];
var formulaCount = 1;

var points = [1000];

var coc = 5;

function setup() {
	createCanvas(dimX, dimY);
}

function draw() {
	clear();
	background(51);

	circles(coc);

	beginShape();
	noFill();
	for( var i = 0; i < points.length; i ++ ){
		vertex(lineX + i, points[i]);
	}
	endShape();

	if( points.length > 250 ){
		points.pop();
	}
	
	time += 0.04;
}
function circles(count){

	stroke(255);
	noFill();
	formulaCount = -1;
	for( var i = 0; i < count; i ++ ){
		if( i == 0 ){
			cirX[i] = r*cos(time) + x;
			cirY[i] = r*sin(time) + y;
			circle(x, y, r);
		}
		else{
			cirX[i] = r/i*formulaCount*cos(time*formulaCount)/formulaCount + cirX[i-1];	
			cirY[i] = r/i*formulaCount*sin(time*formulaCount)/formulaCount + cirY[i-1];	
			circle(cirX[i], cirY[i], r/(i*2));
		}
		formulaCount += 2;
	}

	var last = cirY.length;
	points.unshift(cirY[last-1]);
	

	line(x, y, cirX[0], cirY[0]);
	for( var i = 0; i < count ; i ++ ){
		line(cirX[i], cirY[i], cirX[i+1], cirY[i+1]);
	}
	
	//final line
	line(cirX[last - 1], cirY[last - 1], lineX, cirY[last - 1]);
}

