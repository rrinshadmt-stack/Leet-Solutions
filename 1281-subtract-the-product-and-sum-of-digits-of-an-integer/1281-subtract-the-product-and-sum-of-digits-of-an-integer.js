/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {

    let sqr = 1;
    let sum = 0;

    for (let digit of n.toString()) {
        for(let i=0;i<digit.length;i++){
            sqr*=Number(digit[i])
            sum+=Number(digit[i])
            
            
        }
    }
        return sqr-sum


};