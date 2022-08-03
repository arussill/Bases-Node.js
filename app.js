const { crearArchivo } = require("./helpers/multiplicar");
require("colors");
const argv = require("./config/yargs");
console.clear();


////////////////////////////////////////////////////////////////////////////
const base = argv.b;
// const base = 8;

crearArchivo(base, argv.listar, argv.h)//estoy mandando los argumentos que se ingresaron por consola
  .then((archivo) =>
    console.log(
      `Archivo creado: ${archivo.rainbow} - Esto es confirmacion de app.js que la funcion crearArchivo se ejecuto correctamente`
    )
  )
  .catch((err) => console.log(err));
