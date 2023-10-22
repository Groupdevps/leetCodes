/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return Math.abs(x).toString().split("").reverse().join("") == x.toString()
};