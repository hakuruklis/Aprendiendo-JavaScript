'use strict'

window.addEventListener('load', function(){
    console.log("DOM cargado");
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener("submit", function(){
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value)
    
        if(nombre.trim() == null || nombre.trim().lenght == 0){ 
            alert("El nombre no es validos");
            return false;
        }

        if(apellidos.trim() == null || apellidos.trim().lenght == 0){ 
            alert("Los apellidos no son validos");
            return false;
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es valida");
            return false;
        }

        box_dashed.style.display = "block";
        
        
        var p_nombre = document.querySelector("#p_nombre");
        var p_apellidos = document.querySelector("#p_apellidos");
        var p_edad = document.querySelector("#p_edad");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

    });

});