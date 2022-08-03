/**Para obtener los argumentos que vienen de la consola */
// console.log(process.argv); // si por consola no se le manda nada, es decir, solo se ejecuta la app
//se obtienen dos argumentos
//El primero es el path donde se encuentra la aplicacion de node instalada de forma global
//El segundo es el path donde se encuentra ejecutada esta aplicacion
//los demas argumentos son los que yo le mando por consola, los cuales se pueden desestructurar
// const [ , , arg3 = 'base=1'] = process.argv;
// const [ , , base = 1] = arg3.split('=');//el split separa el argumento por el caracter =

// lo anterior tiene muchos inconvenientes porque hay diferentes formas de pasar argumetos y no son tomadas encuenta
// lo anterior es solo algo basico de como se obtienen, faltarian muchas reglas de validacion

////////////////////////////////////////////////////////////////////////////

//PARA USAR YARGS
// const argv = require('yargs').argv;//que saque de yargs el objeto argv

// console.log(process.argv);//este saca el proceso de la consola los argumentos que se mandan como un array de string
// console.log(argv);//este saca el objeto argv
// console.log('base:yargs', argv.base);//este saca el valor de la base que se ingresa como argumento por consola --base=5

////////////////////////////////////////////////////////////////////////////
// para poder usar yargs y sus funciones

//Permite ingresar la base como argumento por consola
const argv = require("yargs")
  .options("b", {
    //Options: Este método se puede utilizar para que los yargs conozcan las opciones que podrían existir para los argumentos.
    alias: "base", //alias es para que el usuario pueda escribir -b o --base
    type: "number", //para que sea un tipo numero
    demandOption: true, //es obligatorio que se ingrese un valor para la base
    description: "Número de la tabla de multiplicar", //descripcion es para que el usuario sepa que es lo que se esta ingresando
  })
  .option("l", {
    //permite ingresar l o listar por consola como argumento y retorna la tabla de multiplicar si es true
    alias: "listar",
    type: "boolean",
    default: false,
    description: "Listar tabla de multiplicar",
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    description: 'Hasta que numero quieres la tabla',
  })
  .check((argv, options) => {
    //check: Verifique que se cumplan ciertas condiciones en los argumentos proporcionados.
    if (isNaN(argv.b)) {
      throw new Error("La base debe ser un numero");
    }
    if (argv.l !== true && argv.l !== false) {
      throw new Error("La opcion debe ser un booleano");
    }
    return true; //si no hay error se retorna true
  }).argv; //para que se obtenga el objeto argv

// console.log(argv);
// console.log("base:yargs", argv.base);


module.exports =  argv; //no es necesario colocar las llaves porque es un objeto