/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let thre = 0

    for (let ar of arr) {
        if (ar % 2 !== 0) {
            thre++
        } else {
            thre = 0
        }
        if (thre >= 3) return true
    } return false
};

