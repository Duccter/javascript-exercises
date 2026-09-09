const reverseString = function(str) {
    return str.split("").reduce((newString, item) => item + newString, newString = "");
};

// Do not edit below this line
module.exports = reverseString;
