/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {

let tot =[]
    for(let i = 0;i < words.length;i++){
        if(words[i].includes(x))      tot.push(i)
    }
    return tot
};