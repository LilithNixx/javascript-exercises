const palindromes = function (string) {
    // eliminar signos de puntuacion
        const stringWithoutPunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    //eliminar los espacios
    const stringWithoutSpaces = stringWithoutPunctuation.replace(/\s/g, '');
    //dividir la frase a la mitad (cadena.substring(inicio, fin))
    let half = Math.floor(stringWithoutSpaces.length / 2);
    let firstHalf = stringWithoutSpaces.substring(0, half+1);
    let secondHalf = stringWithoutSpaces.substring(half);
    //dar vuelta los elementos de la segunda mitad
    let reversedHalf = secondHalf.split('').reverse().join('');
    //comparar ambas mitades
    if(firstHalf === reversedHalf) {
        return true;
    } else {
       return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
