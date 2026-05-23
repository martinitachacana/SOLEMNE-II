let cantidad = 12;
let espacio = 45;
let tamano;
let velocidad;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(300);

                            //Input
  tamano = map(mouseX, 0, width, 5, 40);
   velocidad = map(mouseY, 0, height, 1, 20);
  
                           //Loop
  
  for (let y = 0; y < cantidad; y++) {

    for (let x = 0; x < cantidad; x++) {

                        //Posición
      
      let posX = x * espacio + 100;
      let posY = y * espacio + 100;

                       //Movimiento
      
      let mover = random(-velocidad, velocidad);

                        //Condicional n1
      
      if (x % 2 == 0) {
        fill(0);
      }

      
    
                        //Condicional n2
      
      if (x % 2 != 0) {
        fill(80);
      }

                        //Funcion propia
      dibujarCirculo(posX + mover, posY + mover, tamano);
    }
  }
}


                         //Funcion

function dibujarCirculo(x, y, t) {

  let ruido = random(-3, 3);

  ellipse(x, y, t + ruido);
}
