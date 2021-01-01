var ocupacion = "Programador"
var hijo = {
    nombre : "Pepe",
    edad : 6
}
var miObjeto = {
    //clave: valor
    nombre: "Juan Manuel",
    apellido: "Grajales Urquijo",
    edad: 20,
    importante: true,
    miPresentacion: `Soy ${ocupacion}`,
    miFuncion: (a, b) => a + b,
    hijo : hijo,
    fecha : new Date()

}//Se trata como diccionario en Python

console.log(miObjeto)
console.log(miObjeto.miFuncion(2,2))
console.log(miObjeto.hijo)
console.log(miObjeto.hijo.nombre)
console.log(miObjeto.fecha.getHours())

var {nombre} = miObjeto // Desestructuracion de objetos

console.log(nombre)

var otraFuncion = ({miPresentacion}, {hijo}) => {
    console.log(miPresentacion)
    console.log(hijo)
    return "soyLaVerga"
}
console.log(otraFuncion(miObjeto, miObjeto))