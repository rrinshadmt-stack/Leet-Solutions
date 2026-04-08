/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let total = 1;
    for (let num of nums) {
        total*=num
    } if (total > 1) {
        return 1
    } else if (total < 0) {
        return -1
    } else {
        return 0
    }

};