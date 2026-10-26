/* -------------------------------------------------------*/

/* ------ Ejercicio 12 Colorear triángulo ----------------*/

function trianguloColores(entrada) {
  let nextLinea = entrada.toUpperCase();
  let nuevaLinea = nextLinea;
  let imprimirBien = "";

  while (nuevaLinea.length > 1) {
    nextLinea = nuevaLinea;
    nuevaLinea = "";
    imprimirBien = "";

    for (let i = 0; i < nextLinea.length - 1; i++) {
      const esta = nextLinea[i];
      const sigu = nextLinea[i + 1];
      let color = "";
      if (esta === sigu) {
        color = esta;
      } else if (
        (esta === "R" && sigu === "G") ||
        (esta === "G" && sigu === "R")
      ) {
        color = "B";
      } else if (
        (esta === "B" && sigu === "G") ||
        (esta === "G" && sigu === "B")
      ) {
        color = "R";
      } else if (
        (esta === "B" && sigu === "R") ||
        (esta === "R" && sigu === "B")
      ) {
        color = "G";
      }
      imprimirBien = imprimirBien + color + " ";
      nuevaLinea += color;
    }
    console.log(`${imprimirBien} `);
  }
}

const miRgb = "RRGBRGBB";
trianguloColores(miRgb);
