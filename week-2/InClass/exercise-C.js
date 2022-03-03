function numberChecker(num) { //creo la funcion
  if (num > 20) { // inicio de la condicional y comprueba si "num" es mayor a 20
    return `${num} is greater than 20`; //si la condicional anterior es falso retorna el mensaje, sino pasa a la siguiente linea
  } else if (num === 20) { //comprueba si "num" es igual a 20
    return `${num} is equal to 20`;//si la condicional anterior es falsoretorna el mensaje, sino pasa a la siguiente linea
  } else if (num < 20) {//comprueba si "num" es menor a 20
    return `${num} is less than 20`;//si la condicional anterior es falso retorna el mensaje, sino pasa a la siguiente linea
  } else {//si la condicional anterior es falsa ejecuta las siguientes lineas
    return `${num} isn't even a number :(`;//retorna el mensaje
  }
}