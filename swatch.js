function circleP () {
  circleSize = 20;
  circle(0, 0, circleSize);
  circle(cellSize, 0, circleSize);
  circle(cellSize / 2, cellSize / 2, circleSize);
  circle(0, cellSize, circleSize);
  circle(cellSize, cellSize, circleSize);
}

function checks() {
  fill("rgba(161, 136, 0, 1)");
  square(0, 0, cellSize / 2);
  square(cellSize / 2, cellSize / 2, cellSize / 2);
}

function checks2() {
  square(cellSize / 2, cellSize, cellSize / 2);
  square(0, cellSize + cellSize / 2, cellSize / 2);
}

function plaid() {
  noStroke();
  let size = cellSize / 2;
  fill(255, 43, 43);
  square(0, 0, cellSize / 2);
  fill(127, 0, 0);
  square(0, size, size);
  square(size, 0, size);
  fill(60, 0, 0);
  square(size, size, size);
  stroke("black");
  strokeWeight(5);
  line(0, cellSize / 10, cellSize, cellSize / 10);
  line(0, 9 * cellSize / 10, cellSize, cellSize / 10 * 9);
  line(cellSize / 10, 0, cellSize / 10, cellSize);
  line(9 * cellSize / 10,0, 9 * cellSize / 10, cellSize);
}


function chevron() {
  noStroke();
  const gap = 20;
  let size = cellSize / 2;
  quad(0, 20 - gap, size, 0 - gap, size, 10 - gap, 0, 30 - gap);
  quad(size, 0 - gap, cellSize, 20 - gap, cellSize, 30 - gap, size, 10 - gap);
  chevron2(0);
  chevron2(1);
  chevron2(2);
  chevron2(3);
  chevron2(4);
}

function chevron2(n){
  let size = cellSize / 2;
  const gap = 20;
    quad(0, 20 + n * gap, size, 0 + n * gap, size, 10 + n * gap, 0, 30 + n * gap);
    quad(size, 0 + n * gap, cellSize, 20 + n * gap, cellSize, 30 + n * gap, size, 10 + n * gap);
}

function harlequin() {
  noStroke();
  triangle(cellSize / 2, 0, 0, cellSize, cellSize, cellSize);
}

function harlequin2() {
  noStroke();
  triangle(0, cellSize, cellSize / 2, 2 * cellSize, cellSize, cellSize);
}

function argyle(){
  noStroke();
  fill("red");
  triangle(0, 0, cellSize / 2, 0, 0, cellSize);
  triangle(cellSize / 2, 0, cellSize, 0, cellSize, cellSize);
  fill("purple");
  triangle(cellSize / 2, 0, 0, cellSize, cellSize, cellSize);
  strokeWeight(5);
  stroke("black");
  line(0, 0, cellSize / 2, cellSize);
  line(cellSize / 2, cellSize, cellSize, 0);
}

function argyle2() {
  noStroke();
  triangle(0, cellSize, cellSize / 2, 2 * cellSize, cellSize, cellSize);
  strokeWeight(5);
  stroke("black");
  line(0, 2 * cellSize, cellSize / 2, cellSize);
  line(cellSize / 2, cellSize, cellSize, 2 * cellSize);
}

function honeycomb() {
  quad(0, cellSize / 3, cellSize / 2, 0, cellSize, cellSize / 3, cellSize, 2 * cellSize / 3);
  quad(cellSize, 2 * cellSize / 3, cellSize / 2, cellSize, 0, 2 * cellSize / 3, 0, cellSize / 3);
}

function flowerDefault(x, y, center){
  noStroke();
  fill("orange");
  translate(x, y);
  ellipse(0, 0, center, center * 10);
  ellipse(0, 0, center * 10, center);
  rotate(PI/4);
  ellipse(0, 0, center, center * 10);
  ellipse(0, 0, center * 10, center);
  fill("yellow");
  circle(0, 0, center * 2);
  rotate(-PI/4);
  translate(-x, -y);
}

function flower(){
  flowerDefault(10, 30, 6);
  flowerDefault(10, 70, 3);
  flowerDefault(70, 10, 3);
  flowerDefault(50, 40, 4);
  flowerDefault(70, 70, 7);
}

function tearx(x, y, size, tail){
  noStroke();
  circle(x, y, size);
  triangle(x, tail, x - size / 2, y, x + size / 2, y);
}

function teary(x, y, size, tail){
  noStroke();
  circle(x, y, size);
  triangle(tail, y, x, y - size / 2, x, y + size / 2);
}

function paisley(){
  tearx(60, 0, 30, -50);
  tearx(10, 10, 10, 30);
  tearx(90, 90, 30, 20);
  circle(50, 50, 20);
  teary (50, 20, 10, 20);
  teary (30, 80, 30, 70);
}
