function isAlphanumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}

const palindromes = function (string) {
    string = string.toLowerCase();
    n = string.length;
    i = 0;
    j = n - 1;
    while (i < j) {
        if (!isAlphanumeric(string[i])) {
            i++;
            continue;
        }
        if (!isAlphanumeric(string[j])) {
            j--;
            continue;
        }

        if (string[i] !== string[j]) return false;
        i++;
        j--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
