//funciones de Flecha -- Arrow functions

var acceso = true
var nombre = "Juan"

var accesoU = function(a){
    return a
}

accesoU(acceso) == true
? console.log("usuario permitido")
: console.log("usuario denegado")

var accesoUArrow = a => a //solo 1 parametro y un retorno

accesoUArrow(acceso) == true
? console.log("usuario permitido")
: console.log("usuario denegado")

var accesoUAsinParametro = () => false //sin parametro y un retorno

accesoUAsinParametro() == true
? console.log("usuario permitido")
: console.log("usuario denegado")

var accesoUVP = (a,b) => console.log(`Uruario ${a} Acceso ${b}`) // varios parametros
accesoUVP(nombre,acceso)

var accesoVLC = (a, b) =>{
    console.log(`Usuario ${b} en ejecucion`)
    return a
}//Varias Lineas de Codigo

accesoVLC(acceso, nombre) == true
? console.log("usuario permitido")
: console.log("usuario denegado")

console.log(typeof accesoVLC)