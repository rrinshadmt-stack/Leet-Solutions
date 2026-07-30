/**
 * @param {number[]} instructions
 * @return {number}
 */
var createSortedArray = function(instructions) {
    const MOD = 1000000007;
    const maxVal = Math.max(...instructions);

    const bit = new Array(maxVal + 2).fill(0);

    function update(i) {
        while (i < bit.length) {
            bit[i]++;
            i += i & -i;
        }
    }

    function query(i) {
        let sum = 0;
        while (i > 0) {
            sum += bit[i];
            i -= i & -i;
        }
        return sum;
    }

    let cost = 0;

    for (let i = 0; i < instructions.length; i++) {
        const x = instructions[i];

        const less = query(x - 1);
        const greater = i - query(x);

        cost = (cost + Math.min(less, greater)) % MOD;

        update(x);
    }

    return cost;
};