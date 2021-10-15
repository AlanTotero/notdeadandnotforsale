function validar() {
    
    var nombre, correo, comentario, errores, formatoEmail, formatoNombre;

    nombre = document.getElementById('nombre').value;
    
    correo = document.getElementById('email').value;

    comentario = document.getElementById('comentario').value;

    errores = document.getElementById('error')

    formatoEmail = /\w+@\w+\.+[a-z]/;

    formatoNombre = /[a-zA-Z]/

    if(nombre === "" || email === "" || comentario === ""){
        alert("¡Todos los campos son obligatorios!")
        return false;
    }

    else if(!formatoNombre.test(nombre)){
        document.getElementById('error').innerHTML = "**El nombre solo puede contener letras**"
        return false;
    }

    else if(nombre.length > 30){
        document.getElementById('error').innerHTML = "**el nombre es muy largo!!!**"
        return false;
    }
    

    else if(comentario.length <= 10){
        document.getElementById('error').innerHTML = "**el comentario es muy corto!!!**"
        return false;
    }

    else if(!formatoEmail.test(correo)){
        document.getElementById('error').innerHTML = "**formato de correo inválido, ejemplo: abc@abc.com**"
        return false;
    }
}

