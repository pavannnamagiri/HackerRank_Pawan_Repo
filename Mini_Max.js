'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    var arrClone1 = arr.slice()
    var arrClone2 = arr.slice()

    var arrMinor = arrClone1.sort(function (a, b) { return a - b; })
    arrMinor.pop()

    var arrMajor = arrClone2.sort(function (a, b) { return b - a; })
    arrMajor.pop()

    function getSum(a, b) {
        return a + b;
    }

    var result1 = arrMinor.reduce(getSum);
    var result2 = arrMajor.reduce(getSum);

    console.log(result1 + " " + result2); 


}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
