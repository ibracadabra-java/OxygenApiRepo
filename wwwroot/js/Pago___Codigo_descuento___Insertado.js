$("#input_code").keyup(function () {
    var code = $("#input_code").val();

    if (code.length > 0) {
        $("#boton_comprobar").show();
        
    }
    else {
        $("#boton_comprobar").hide();
        
    }
});