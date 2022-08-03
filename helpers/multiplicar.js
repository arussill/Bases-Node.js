const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta=10) => {
  try {
    let salida = "";

    for (let index = 0; index < hasta; index++) {
      let resultado = (index + 1) * base;
      salida += `${index + 1} x ${base} = ${resultado}\n`;
    }

    if (listar) {
      //si el argumento listar es true se muestra la tabla por consola
      console.log(
        "===========================================================".green
      );
      console.log(`                      Tabla del ${base}`.blue);
      console.log(
        "===========================================================".green
      );

      console.log(salida.rainbow);
    }

    ////////////////////////////////////////////////////////////////////////////////
    //   para crear archivos en el sistema de archivos
    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    //   });

    //////////////////////////////////////////////////////////////////////////////////
    /**
     * Otra forma de hacerlo
     * Con el writeFileSync es una forma mas corta
     * Pero el error se debe caprutar con un try catch
     */
    // try {
    //     fs.writeFileSync(`tabla-${base}.txt`, salida);
    //     console.log('The file has been saved!');
    // } catch (error) {
    //   console.log(error);
    // }

    //////////////////////////////////////////////////////////////////////////////////
    //O simplemento mas corto sin el try catch
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    console.log("The file has been saved!");
    return `Tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = { crearArchivo }; //para poder exportar la funcion creada en este archivo a otras partes.
