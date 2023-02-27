const banco = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 150; i++){
        banco.push(new Vehiculo());
    }
}
function windowResize() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0, 113, 255);
    let color1 = color(0, 255, 237);
    let color2 = color(0, 113, 255);
    
    for(let y = 0; y < height; y++){
      n = map(y,0,height,0,1);
      let colorNuevo = lerpColor(color1, color2, n);
      stroke(colorNuevo);
      line(0, y, width, y);
    }
    for (let unidad of banco) {
        unidad.screenWrapping();
        unidad.separacion(banco);
        unidad.alinear(banco);
        unidad.cohesion(banco);
        unidad.update();
        unidad.show();
    }
}