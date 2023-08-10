const reverseString = function(string) {
    let splitted = string.split("");
    let reversed = "";
    
    for (let i = splitted.length - 1; i >= 0; i--){
       
        reversed += splitted[i];
    }
    
    return reversed;
};


// Do not edit below this line
module.exports = reverseString;
