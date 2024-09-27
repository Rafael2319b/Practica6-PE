const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularEdad(){

    rl.question('Ingrese su edad:',(edad)=>{

        if(edad < 13){
            console.log("Usted es menor de edad")
        }else if(edad >= 13 && edad < 18){
            console.log("Usted es un adolescente")
        }else if(edad >= 18 && edad < 65){
            console.log("Usted es un adulto")
        }else{
            console.log("Usted es un adulto mayor")
        }
        rl.close()
    })


}
calcularEdad();