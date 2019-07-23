$(document).ready(function(){

    // Selector de id
    $("#rojo").css("background","red").css("color","white");
    $("#amarillo").css("background","yellow").css("color","green");
    $("#verde").css("background","green").css("color","white");
            
    //Selectores de Clase
    var mi_clase = $('.zebra').css("padding","5px");

    $(".sin_borde").click(function(){
        $(this).addClass('zebra');
    });
        
    
    //Selectores de etiqueta
    var parrafos = $('p');

    parrafos.click(function(){
        if($(this).hasClass("zebra")){
            $(this).addClass("grande");
        }
    });

});