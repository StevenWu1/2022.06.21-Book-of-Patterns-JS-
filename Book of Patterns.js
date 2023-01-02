const numRows = 2;
const numCols = 4;

const cellSize = 100;
const canvasWidth = numCols * cellSize;
const canvasHeight = numRows * cellSize;

const stripe = ( p ) => {



  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.background("white");
  };

  p.draw = function() {
    for (i = 0; i < numCols; i++){
      p.stroke("grey");
      p.square(i * cellSize, 0, cellSize);
      p.square(i * cellSize, cellSize, cellSize);
}
    stripesRepeat();
    for (i = 0; i < numRows + 1; i++){
      p.stroke("grey");
      p.line(0, i * cellSize, cellSize * 4, i * cellSize);
}
  };

  function stripes() {
  const numLines = 5;
  const gap = cellSize / numLines;
  for (let i = 0; i < numLines; i++) {
    p.stroke("DeepPink");
    p.strokeWeight(10);
    const x = (i + 0.5) * gap;
    p.line(x, 0, x, cellSize);
  }
}
  function stripesRepeat() {
  for (i = 0; i < numCols; i++){
    p.translate(i * cellSize, 0);
    stripes();
    for (j = 0; j < numRows; j++){
      p.translate(0, j * cellSize);
      stripes();
      p.translate(0, -1 * j * cellSize);
    }
    p.translate(-1 * i * cellSize, 0);
  }
}
};

let BOP1 = new p5(stripe);

const circleP = ( p ) => {

  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.background("white");
  };

  p.draw = function() {
    circleRepeat();
  };

  function circleRepeat() {
  for (i = 0; i < numCols; i++){
    p.translate(i * cellSize, 0);
    circleP();
    for (j = 0; j < numRows; j++){
      p.translate(0, j * cellSize);
      circleP();
      p.translate(0, -j * cellSize);
    }
    p.translate(-1 * i * cellSize, 0);
  }
}

  function circleP () {
  circleSize = 20;
  p.circle(0, 0, circleSize);
  p.circle(cellSize, 0, circleSize);
  p.circle(cellSize / 2, cellSize / 2, circleSize);
  p.circle(0, cellSize, circleSize);
  p.circle(cellSize, cellSize, circleSize);
}
};

let BOP2 = new p5(circleP);

const checker = ( p ) => {

  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.background("white");
  };

  p.draw = function() {
    checksRepeat();
  };

function checks() {
  p.fill("rgba(161, 136, 0, 1)");
  p.square(0, 0, cellSize / 2);
  p.square(cellSize / 2, cellSize / 2, cellSize / 2);
}

function checks2() {
  p.square(cellSize / 2, cellSize, cellSize / 2);
  p.square(0, cellSize + cellSize / 2, cellSize / 2);
}
function checksRepeat() {
  p.noStroke();
  for (i = 0; i < numCols; i++){
    if (i % 2 === 0){
      p.translate(i * cellSize, 0);
      checks();
      checks2();
      p.translate(-1 * i * cellSize, 0);
    }
    if (i % 2 === 1){
      p.translate(i * cellSize, 0);
      p.translate(0, -1 * cellSize);
      checks2();
      p.translate(0, 2* cellSize);
      checks();
      p.translate(-1 * i * cellSize, -1 * cellSize);
    }
  }
}
};

let BOP3 = new p5(checker);

const plaids = ( p ) => {

  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.background("white");
  };

  p.draw = function() {
    plaidRepeat();
  };

function plaidRepeat() {
  for (i = 0; i < numCols; i++){
    p.translate(i * cellSize, 0);
    plaid();
    p.translate(0, cellSize);
    plaid();
    p.translate(0, -1 * cellSize);
    p.translate(-1 * i * cellSize, 0);
  }
}
  function plaid() {
  p.noStroke();
  let size = cellSize / 2;
  p.fill(255, 43, 43);
  p.square(0, 0, cellSize / 2);
  p.fill(127, 0, 0);
  p.square(0, size, size);
  p.square(size, 0, size);
  p.fill(60, 0, 0);
  p.square(size, size, size);
  p.stroke("black");
  p.strokeWeight(5);
  p.line(0, cellSize / 10, cellSize, cellSize / 10);
  p.line(0, 9 * cellSize / 10, cellSize, cellSize / 10 * 9);
  p.line(cellSize / 10, 0, cellSize / 10, cellSize);
  p.line(9 * cellSize / 10,0, 9 * cellSize / 10, cellSize);
}
};

let BOP4 = new p5(plaids);

const chevrons = ( p ) => {

  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.background("black");
  };

  p.draw = function() {
    chevronRepeat();
  };
function chevronRepeat() {
  for (i = 0; i < numCols; i++){
    p.translate(i * cellSize, 0);
    chevron();
    for (j = 0; j < numRows; j++){
      p.translate(0, j * cellSize);
      chevron();
      p.translate(0, -j * cellSize);
    }
    p.translate(-1 * i * cellSize, 0);
  }
}

function chevron() {
  p.noStroke();
  const gap = 20;
  let size = cellSize / 2;
  p.quad(0, 20 - gap, size, 0 - gap, size, 10 - gap, 0, 30 - gap);
  p.quad(size, 0 - gap, cellSize, 20 - gap, cellSize, 30 - gap, size, 10 - gap);
  chevron2(0);
  chevron2(1);
  chevron2(2);
  chevron2(3);
  chevron2(4);
}

function chevron2(n){
  let size = cellSize / 2;
  const gap = 20;
    p.quad(0, 20 + n * gap, size, 0 + n * gap, size, 10 + n * gap, 0, 30 + n * gap);
    p.quad(size, 0 + n * gap, cellSize, 20 + n * gap, cellSize, 30 + n * gap, size, 10 + n * gap);
}

};

let BOP5 = new p5(chevrons);

const harlequin1 = ( p ) => {

  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.background("white");
  };

  p.draw = function() {
    harlequinRepeat();
  };
function harlequinRepeat(){
  p.noStroke();
  p.fill("purple");
  for (i = 0; i < numCols; i++){
    p.translate(i * cellSize, 0);
    harlequin();
    for (j = 0; j < numRows; j++){
      harlequin2();
    }
    p.translate(-1 * i * cellSize, 0);
  }
}

function harlequin() {
  p.noStroke();
  p.triangle(cellSize / 2, 0, 0, cellSize, cellSize, cellSize);
}

function harlequin2() {
  p.noStroke();
  p.triangle(0, cellSize, cellSize / 2, 2 * cellSize, cellSize, cellSize);
}
};

let BOP6 = new p5(harlequin1);

const Argyle = ( p ) => {

  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.background("white");
  };

  p.draw = function() {
    argyleRepeat();
  };
function argyleRepeat(){
  p.noStroke();
  p.fill("purple");
  for (i = 0; i < numCols; i++){
    p.translate(i * cellSize, 0);
    argyle();
    argyle2();
    p.translate(-1 * i * cellSize, 0);
  }
}

function argyle(){
  p.noStroke();
  p.fill("red");
  p.triangle(0, 0, cellSize / 2, 0, 0, cellSize);
  p.triangle(cellSize / 2, 0, cellSize, 0, cellSize, cellSize);
  p.fill("purple");
  p.triangle(cellSize / 2, 0, 0, cellSize, cellSize, cellSize);
  p.strokeWeight(5);
  p.stroke("black");
  p.line(0, 0, cellSize / 2, cellSize);
  p.line(cellSize / 2, cellSize, cellSize, 0);
}

function argyle2() {
  p.noStroke();
  p.triangle(0, cellSize, cellSize / 2, 2 * cellSize, cellSize, cellSize);
  p.strokeWeight(5);
  p.stroke("black");
  p.line(0, 2 * cellSize, cellSize / 2, cellSize);
  p.line(cellSize / 2, cellSize, cellSize, 2 * cellSize);
}
};

let BOP7 = new p5(Argyle);

const honey = ( p ) => {

  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.background("white");
  };

  p.draw = function() {
    honeycombRepeat();
  };
function honeycombRepeat() {
  p.fill("rgba(225, 153, 19, 1)");
  p.strokeWeight(10);
  p.stroke("rgba(117, 79, 10, 1)");
  p.translate(0, -1 * cellSize / 3);
  for (let i = 0; i < numCols; i++){
    p.translate(i * cellSize, 0);
    honeycomb();
    p.translate(-1 * i * cellSize, 0);
  }
  p.translate(-1 * cellSize / 2, 2 * cellSize / 3);
    for (let i = 0; i < numCols + 1; i++){
    p.translate(i * cellSize, 0);
    honeycomb();
    p.translate(-1 * i * cellSize, 0);
  }
  p.translate(cellSize / 2, 2 * cellSize / 3);
    for (let i = 0; i < numCols; i++){
    p.translate(i * cellSize, 0);
    honeycomb();
    p.translate(-1 * i * cellSize, 0);
  }
    p.translate(-1 * cellSize / 2, 2 * cellSize / 3);
    for (let i = 0; i < numCols + 1; i++){
    p.translate(i * cellSize, 0);
    honeycomb();
    p.translate(-1 * i * cellSize, 0);
  }
}

function honeycomb() {
  p.quad(0, cellSize / 3, cellSize / 2, 0, cellSize, cellSize / 3, cellSize, 2 * cellSize / 3);
  p.quad(cellSize, 2 * cellSize / 3, cellSize / 2, cellSize, 0, 2 * cellSize / 3, 0, cellSize / 3);
}
};

let BOP8 = new p5(honey);

const flowers = ( p ) => {

  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.background("white");
  };

  p.draw = function() {
    flowerRepeat();
  };
function flowerRepeat() {
  for (i = 0; i < numCols; i++){
    p.translate(i * cellSize, 0);
    flower();
    for (j = 0; j < numRows; j++){
      p.translate(0, j * cellSize);
      flower();
      p.translate(0, -j * cellSize);
    }
    p.translate(-1 * i * cellSize, 0);
  }
}
  
function flowerDefault(x, y, center){
  const PI = 3.14;
  p.noStroke();
  p.fill("orange");
  p.translate(x, y);
  p.ellipse(0, 0, center, center * 10);
  p.ellipse(0, 0, center * 10, center);
  p.rotate(PI/4);
  p.ellipse(0, 0, center, center * 10);
  p.ellipse(0, 0, center * 10, center);
  p.rotate(-1 * PI / 4);
  p.fill("yellow");
  p.circle(0, 0, center * 2);

  p.translate(-x, -y);
}

function flower(){
  flowerDefault(10, 30, 6);
  flowerDefault(10, 70, 3);
  flowerDefault(70, 10, 3);
  flowerDefault(50, 40, 4);
  flowerDefault(70, 70, 7);
}
};

let BOP9 = new p5(flowers);

const tearDrop = ( p ) => {

  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.background("blue");
  };

  p.draw = function() {
    p.fill("skyblue");
    paisleyRepeat();
  };
  function paisleyRepeat() {
    for (i = 0; i < numCols; i++){
    p.translate(i * cellSize, 0);
    paisley();
    for (j = 0; j < numRows; j++){
      p.translate(0, j * cellSize);
      paisley();
      p.translate(0, -j * cellSize);
    }
    p.translate(-1 * i * cellSize, 0);
  }
}

function tearx(x, y, size, tail){
  p.noStroke();
  p.circle(x, y, size);
  p.triangle(x, tail, x - size / 2, y, x + size / 2, y);
}

function teary(x, y, size, tail){
  p.noStroke();
  p.circle(x, y, size);
  p.triangle(tail, y, x, y - size / 2, x, y + size / 2);
}

function paisley(){
  tearx(60, 0, 30, -50);
  tearx(10, 10, 10, 30);
  tearx(90, 90, 30, 20);
  p.circle(50, 50, 20);
  teary (50, 20, 10, 20);
  teary (30, 80, 30, 70);
}
};

let BOP10 = new p5(tearDrop);
