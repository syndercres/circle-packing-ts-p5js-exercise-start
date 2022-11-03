function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    background("white");

    const circlesArray: CircleData[] = calculatePackedCircles(width, height);

    for (const c of circlesArray) {
        drawCircle(c);
    }
}

function drawCircle(c: CircleData) {
    const shade = random(50, 100);
    fill(random([
        "#490a3d",
        "#bd1550",
        "#e97f02",
        "#f8ca00",
        "#8a9b0f",
        "#e8ddcb","#cdb380","#036564","#033649","#031634"
      ]));
    noStroke();
    circle(c.position.x, c.position.y, c.radius * 2);
}

// If user clicks, draw() will be called again (indirectly)
function mousePressed() {
    redraw();
}
