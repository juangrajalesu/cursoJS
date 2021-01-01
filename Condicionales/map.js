//map y reduce
var uno, dos, tres, cuatro, cinco 

var peliculas = [
    uno ={
        titulo : "La monja",
        año : 2018,
        valoracion : 4
    },
    dos={
        titulo : "Anabelle",
        año : 2014,
        valoracion : 3
    },
    tres={
        titulo : "Anabelle 2",
        año : 2017,
        valoracion : 5
    },
    cuatro={
        titulo : "El conjuro",
        año : 2013,
        valoracion : 5
    },
    cinco={
        titulo : "El conjuro 2",
        año : 2016,
        valoracion : 3
    }
]

var sumarValoracion = ({valoracion}) => valoracion>=5 ? ++valoracion : valoracion

var valorado = peliculas.map(sumarValoracion)

console.log(valorado)

var reducirValoracion = (acum, {valoracion}) => acum+valoracion

var miValoracion = peliculas.reduce(reducirValoracion, 0)

console.log(miValoracion)