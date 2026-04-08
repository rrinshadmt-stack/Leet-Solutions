/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let record = [];

    for (let op of operations) {

        if (op === "+") {
            let last = record[record.length - 1];
            let secondLast = record[record.length - 2];
            record.push(last + secondLast);

        } else if (op === "D") {
            let last = record[record.length - 1];
            record.push(2 * last);

        } else if (op === "C") {
            record.pop();

        } else {
            record.push(Number(op));
        }
    }

    let sum = 0;
    for (let num of record) {
        sum += num;
    }

    return sum;
};