'use strict'

//Local Storage


//Comprobar disponibilidad del local storage
if(typeof(Storage) !== 'undefined'){
    console.log("Compatible con local storage");
}else{
    console.log("No compatible con local storage")
}

//Guadar valores en el local storage
localStorage.setItem("ttulo","Curso de JS");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos
var usuario = {
    nombre : "Humberto Kuruklis",
    email: "hakuruklis@gmail.com",
    web: "humbertok.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

//Formas de remover elementos del local storage
localStorage.removeItem("usuario");
localStorage.clear();