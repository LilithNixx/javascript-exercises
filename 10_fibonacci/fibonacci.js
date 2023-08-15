const fibonacci = function(amount) {
    let sum = 1;
    let lastNum = 1;
   
    if (amount === 0){
        return 0;
    } else if (amount === 1) {
        return 1;
    }

    for (let i = 2; i <= amount-1; i++){
        sum += lastNum;
        lastNum = sum-1;
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
