const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    fi = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fi.push(fi.at(-1) + fi.at(-2));
    }

    return fi.at(n);
};

// Do not edit below this line
module.exports = fibonacci;
