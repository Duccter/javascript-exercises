const sumAll = function(num1, num2) {
    if (!(Number(num1) && Number(num2)) || (num1 < 0 || num2 < 0) || !(Number.isInteger(num1) && Number.isInteger(num2))) return "ERROR";

    let sum = (num2*(num2 + 1) / 2) - (num1*(num1 + 1) / 2);

    return (sum > 0 ? sum + num1: -sum + num2);
    
};

// Do not edit below this line
module.exports = sumAll;
