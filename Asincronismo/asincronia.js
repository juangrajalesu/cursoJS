//Asinctonismo

let funcionParam = () => console.log("soy una funcion")

let funcion = (callback) => {
    console.log("Hola funcion")//callback
    callback
}

funcion(funcionParam())

console.log(1)
setTimeout(() => console.log("hola mundo"), 0)//callback
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)

for (let index = 0; index < 9999; index++) {
    console.log("R")
    
}