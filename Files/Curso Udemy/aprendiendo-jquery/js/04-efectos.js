$(document).ready(function(){

    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        $("#caja").fadeTo('slow', 0.8);
    });
    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        $("#caja").fadeTo('slow', 0.2);
    });

    $("#todoenuno").click(function(){
        $("#caja").slideToggle('fast');
    });

});