/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {

    let x = 0;
    let y = 0;

for(let move of moves){
    if(move ==="U")x++
    if(move ==="D")x--
    if(move ==="L")y++
    if(move ==="R")y--
}
if(x==0&&y==0){

    return true
}else{
    return false
}
};