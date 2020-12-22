

function checkRut( rut,contraseña) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
   
    // Despejar Guión
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    //asignar valor contraseña

    var contra = contraseña.value;
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv ) { rut.setCustomValidity("RUT Inválido"); return false; }
    else{
        //rut.setCustomValidity("rut ingresado es correcto");
        if(contra.length>20 || contra.length==0 ){
            contraseña.setCustomValidity("contraseña invalida"); return false;
            
          }
          else{
              //contraseña.setCustomValidity("contraseña valida");
              location.href="listadousuarios.html"
          }
    }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    
}



/*function validarcontra(contraseña){

    var contra = contraseña.value;
   
    if(contra.length>20 || contra.length==0 ){
        contraseña.setCustomValidity("contraseña invalida"); return false;
        
      }
      else{
          contraseña.setCustomValidity("contraseña valida");
      }
      
}*/

