
//requerimos la funcion crear archivo y la llamamos desde su ubicacion
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs"); 
const colors = require("colors");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
     .then(nombreArchivo => console.log(nombreArchivo, "Creado".green))
     .catch(err => console.log(err));














//dos argv, el propio de node y el de yargs
//console.log(process.argv);
//console.log(argv);

//console.log("base yargs= " , argv.base );




//
////base=5 nos interesa del arreglo la base que es el tercero
//const[, , arg3 ="base=5"] = process.argv;  //primer argumento base
////extraemos el numero 
//const [, base = 5] = arg3.split; // segundo argumento numero, va a ser la nueva base
////const base = 2;
//
//crearArchivo(base)
//    .then(nombreArchivo => console.log(nombreArchivo , "OK"))
//   .catch( err => console.log(err));
