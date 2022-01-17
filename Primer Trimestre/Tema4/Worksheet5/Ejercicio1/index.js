function validarMayuscula(e){
  let regex= new RegExp('[A-ZÑ]');
  if(regex.test(e) == false){
      alert("El parametro debe constar de al menos un caracter en MAYUSCULA");
      return false;
  }
  return true;    
}

function validarCaracteresEspeciales(e){
  let regex= new RegExp('[!@#$%^&]');
  if(regex.test(e) == false){
      alert("El parametro debe constar de al menos uno de estos caracteres: !@#$%^&");
      return false;
  }
  alert("El parametro reune las caracteristicas necesarias")
  return true;    
}

function validarCorreo(e){
      let regex= new RegExp('[\w]+@gmail+[\.]com$');//
      if(regex.test(e)==false){
        return true;
        alert("El email es válido");
      }
      else{
        alert("El email no es valido");
        return false;
      }
    }

function validarTarjetaCredito(e){

  var ccNum = document.getElementById("cardNum").value;

  var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  var amexpRegEx = /^(?:3[47][0-9]{13})$/;
  var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/; 


  if (visaRegEx.test(ccNum) === false ){ // Visa 
      return "Usa un numero valido de tarjeta";  
      }  
    else  
      {  
          return "Gracias";   
      }  

  if (mastercardRegEx.test(ccNum) === false){ // MasterCard 
      return "Usa un numero valido de tarjeta"; 
      }  
    else  
      {  
          return "Gracias"; 
      } 

  if(amexpRegEx.test(ccNum) === false){ // Amex  
      return "Usa un numero valido de tarjeta";   
      }  
    else  
      {   
          return "Gracias";   
      } 

  if (discovRegEx.test(ccNum) === false){ // Discover
      return "Usa un numero valido de tarjeta"; 
      }  
    else  
      {  
      return "Gracias";  
      } 

  }

function validarLongitud(e){
  let regex= new RegExp('[\w]{8,}/');
  if(regex.test(e) == false){
      alert("El parametro debe constar de al menos 8 caracteres ");
      return false;
  }
  alert("La longitud es correcta");
  return true;
}

function validarNumero(e){
  let regex= new RegExp('[\d]{1,}');
  if(regex.test(e) == false){
      alert("El parametro debe constar de al menos un dígito");
      return false;
  }
  alert("El parametro es correcto");
  return true;
}