
//Devolver una fecha en forma correcta
//Este objeto se utiliza para lo que se conoce como ECMAScript Internationalization API. Los constructores para los objetos Collator, NumberFormat, y DateTimeFormat son propiedades de Intl.
function formatDate(fecha) {
    //nueva instancia (objeto)
    const collator = new Intl.DateTimeFormat("es-Ar", { // Intl se instancia pasándole como argumento una cadena de texto en formato: el nombre abreviado internacional del idioma  y la abreviatura del país/cultura en mayúscula 
    //que tipo de fecha quiero que me formatee.
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  
    const fechaFormateada = collator.format(fecha);//la variable collactor tiene predeterminada la funcion .format
    console.log(fechaFormateada);
  
    //Devolver fecha en formato correcto
    return fechaFormateada;
  }
  