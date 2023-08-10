const sumAll = function(num1, num2) {

    let result = 0;
    //recorrer desde el 1er numero hasta el ultimo
    for(let i = num1; i <= num2; i++){
        //sumar al primero el segundo y asi sucesivamente hasta el ultimo
        result += i;
    }
    
    //devolver el resultado en una variable acumuladora
   return result;
};

// Do not edit below this line
module.exports = sumAll;
