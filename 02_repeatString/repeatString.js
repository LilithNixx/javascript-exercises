const repeatString = function(string, num) {
   let repeat = "";

    if (num >=0) {
        for (let i = 0; i <= num-1; i++){
            repeat += string;
        } 
    }else {
        return "ERROR: negative number";
    }  

    return repeat;
};



// Do not edit below this line
module.exports = repeatString;
