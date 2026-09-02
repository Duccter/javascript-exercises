const removeFromArray = function(arr) {
    n = arguments.length - 1;
    let newArr = arr.slice();
    for (let i = 1; i <= n; i++) {
        let idRemovedElement = newArr.findIndex((element) => element === arguments[i]);
        while (idRemovedElement !== -1) {
            newArr.splice(idRemovedElement, 1);
            idRemovedElement = newArr.findIndex((element) => element === arguments[i]);
        }
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
