// For y ForEach
var contador=4

for (let index = 0; index < 10; index++) {
    console.log(index+1)
    if(index==3 && contador!==4){
        console.log("repito")
        contador++
        index=0
    }
    
}

var lista =[1,2,3,5,8,13,21,34]
let x = 0
lista.forEach(element => {
    x += element
    console.log(x)
})


