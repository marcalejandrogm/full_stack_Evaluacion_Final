function ComboAno(){
    var select = document.getElementById("ano");
    for(var i = 2010; i<=2050; i++)select.options.add(new Option(i,i)); 
 };



 function cargarfecha(){
   var hoy= new Date();
   var fecha = hoy.getDate() + '/' + ( hoy.getMonth() + 1 ) + '/' + hoy.getFullYear();
   document.getElementById("fechaactual").value=fecha;
   

}

function validar(){
var monto = document.getElementById("monto").value;
var rut=  document.getElementById("rut").value;
    if( monto =="" || rut ==""){
        alert("Debe ingresar todos los campos!");

    }
    else{
        if(isNaN(monto) || monto<=0 || monto>99999999){
            alert("Ingrese un monto válido entre 1 y 99999999");
   
        }
        else{
            alert("Todos los campos estan correctos!");
            
        }
    }
}

function iniciar(){
    ComboAno();
    cargarfecha();
}
window.onload= iniciar;
 
//Funcion para cambiar el input text
function comprueba(obj) {
    if (obj.value=='') {
        if (document.getElementById) {
            obj.style.backgroundColor = '#F2D7D5';
            obj.style.border= "1px solid #f00";
            
        }
    } else {
        if (document.getElementById) {
            obj.style.backgroundColor = '#FFFFFF';
            obj.style.border= "1px solid #17202A";
        }
    }
}