const findTheOldest = function(arr) {
    return (
        arr
        .reduce((arr, obj) => {
            objR = {};
            objR.name = obj.name;
            objR.Age = (obj.yearOfDeath ?? 2020) - obj.yearOfBirth;
            arr.push(objR);
            
            return arr;
        }, [])
        .reduce((max, obj) => {
            if (max.Age > obj.Age) {
                return max;
                
            } else {
                return obj;
            }
        })
    );
};

// Do not edit below this line
module.exports = findTheOldest;