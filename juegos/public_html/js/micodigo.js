var n1, n2 , n3;
$(document).ready(function (){
        cargar();
        
        $("#frmJuego").submit(function (evt){
            evt.preventDefault();
            cargar();
            var apuesta = parseInt($("#t1").val());
            
            if(n1===n2 && n1===n3 ){
                $("#divMsg").html("<h2>FELICIDADES</h2>");
                $("#divMsg").append("<p>Ha triplicado su apuesta<p/>");
                apuesta = apuesta *3;    
                $("#t1").css("background-color","yellow");
            }    
            else if(n1===n2 || n1===n3  || n2===n3  ){
                $("#divMsg").html("<h2>FELICIDADES</h2>");
                $("#divMsg").append("<p>Ha duplicado su apuesta<p/>");
                apuesta = apuesta *2;    
                $("#t1").css("background-color","cyan");
            }
            else{
                $("#divMsg").html("<h2>INTENTA NUEVAMENTE</h2>");
                $("#divMsg").append("<p>Ha disminuido su apuesta en $ 1000 <p/>");
                apuesta = apuesta -1000;
                $("#t1").css("background-color","white");
            }      
            $("#t1").val(apuesta);
        });       
});
function cargar(){
        n1 = (Math.random() *9)+1;
        n1 = parseInt(n1.toFixed(0));
        
        n2 = (Math.random() *9)+1;
        n2 = parseInt(n2.toFixed(0));
        
        n3 = (Math.random() *9)+1;
        n3 = parseInt(n3.toFixed(0));
        
        if(n1>9) n1=9;if(n2>9) n2=9;if(n3>9) n3=9;
        
        $("#divImg").html("<img src='imagenes/img" +n1 +".jpg'>");
        $("#divImg").append("<img src='imagenes/img" +n2 +".jpg'>");
        $("#divImg").append("<img src='imagenes/img" +n3 +".jpg'>");      
}
