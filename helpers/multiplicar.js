const fs = require("fs");
const crearArchivo = async (base, listar = false, hasta = 10) => {

 
    try {

        
        let salida , consola = "";


        for (let i = 1; i <= hasta; i++) {

            salida += `${base} x ${i}  = ${base * i}\n`;
            consola += `${base} ${"x".yellow}  ${i}  = ${base * i}\n`;
        }
        if (listar) {
            console.log("=========================================".yellow);
            console.log(`TABLA DEL ${base}`.random);
            console.log("=========================================".yellow)
            console.log(consola);

        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); //al archivo creado le pasamos los valores de la salida

        return `tabla-${base}.txt creado`.rainbow;
    } catch (err) {
        throw err;
    }

}
module.exports = {
    crearArchivo
}