function isBalanced(str) {
    // Base case: empty string is balanced
    if (str.length === 0) return true;

    // Base case: if length is odd, it cannot be balanced
    if (str.length % 2 !== 0) return false;

    // Recursive case: check for matching pairs
    function removePair(str) {
        const pairs = ["()", "{}", "[]"];

        for (let pair of pairs) {
            const index = str.indexOf(pair);
            if (index !== -1) {
                const newStr = str.slice(0, index) + str.slice(index + 2);
                return removePair(newStr);
            }
        }

        // If no pairs found, return the string as is
        return str;
    }

    // After attempting to remove all pairs, check if the string is empty
    return removePair(str) === "";
}

// Test cases
console.log(isBalanced("([])")); // true
console.log(isBalanced("([)]")); // false
console.log(isBalanced("{[()()]}")); // true
console.log(isBalanced("((()")); // false
console.log(isBalanced("{[()()]()}")); // true
