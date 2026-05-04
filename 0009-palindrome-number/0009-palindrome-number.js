/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const reversed = String(x).split('').reverse().join('');
  if(x==reversed){
    return true
  }  else{
    return false
  }
};