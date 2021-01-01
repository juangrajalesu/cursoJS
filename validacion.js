var validacionesCorrectas = {
    correo: false,
    contraseña: false,
    nombre: false,
    edad: false,
    sexo: false
}

function validarCorreo(obj) {
    let a = obj.value
    let vcorreo = /(\w)+@(\w)+(\.(\w){2,4})+/

    if (vcorreo.test(a)) {

        obj.style.borderColor = "green"
        validacionesCorrectas.correo = true
    }
    else {
        obj.style.borderColor = "red"
        validacionesCorrectas.correo = false
    }

}

function validarContraseña(obj) {
    let a = obj.value
    let vcontraseña = /(\w|\W){6,}/
    
    if (vcontraseña.test(a) && a.match(/[A-Z]/) && a.match(/[0-9]/) && a.match(/[¿_*"]/)) {

        obj.style.borderColor = "green"
        validacionesCorrectas.contraseña = true
    } 
    else {
        obj.style.borderColor = "red"
        validacionesCorrectas.contraseña = false
    }
}

function validarNombre(obj){
    let a = obj.value
    let estructura =/^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/

    if(/\w/.test(a) && !/\d/.test(a) && estructura.test(a)){
        obj.style.borderColor = "green"
        validacionesCorrectas.nombre = true
    }
    else {
        obj.style.borderColor = "red"
        validacionesCorrectas.nombre = false
    }
}

function validarEdad(obj){
    let a = obj.value
    let vedad=/[0-1]{1}[0-9]{0,2}/;
    if(a>0 && a<150 && vedad.test(a)){
        obj.style.borderColor = "green"
        validacionesCorrectas.edad = true
    }
    else {
        obj.style.borderColor = "red"
        validacionesCorrectas.edad = false
    }
}

function validarSexo(obj){
    let a = obj.value
    if(a!=="Elegir"){
        obj.style.borderColor = "green"
        validacionesCorrectas.sexo = true
    }
    else {
        obj.style.borderColor = "red"
        validacionesCorrectas.sexo = false
    }
    
}

function validacionTotal(){
    let contador=0

    for(const parte in validacionesCorrectas){
        
        if(validacionesCorrectas[parte]===false){
            alert("No has llenado correctamente el formulario")
            break
        }
        else{
            contador+=1
        }   
    }
    
    if(contador===5){
        alert("Has llenado el formulario correctamente")
        location.reload()
    }
    
}

