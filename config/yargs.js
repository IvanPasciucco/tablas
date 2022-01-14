const argv = require('yargs')
     //forma corta
     .option("b", {
          alias: "base",
          type: "number",
          demandOption: true,
          describe: "Es la base de la tabla de multiplicar"
     })

     .option("h", {
          alias: "hasta",
          type: "number",
          default : "10",
          demandOption: true,
          describe: "Hasta que numero multiplicar"
     })
     .option("l", {
          alias: "listar",
          type: "boolean",
          demandOption: true,
          default: false,
          describe: "lista la tabla"
     })

     .check((argv, options) => {
          if (isNaN(argv.b)) {
               throw "La base tiene que ser un numero";
          }
          return true;

     })

     .argv

     module.exports = argv;