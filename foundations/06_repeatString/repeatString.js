const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }

    let strRes = "";
    for (let i = 0; i < num; i++) {
        strRes += str;
    }

    return strRes;
};

// Do not edit below this line
module.exports = repeatString;
