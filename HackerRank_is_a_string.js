'use strict';

const fs = require('fs');

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

// Complete the hackerrankInString function below.
function hackerrankInString(s) {

    
    var check = ["h", "a", "c", "k", "e", "r", "r", "a", "n", "k" ];
    var arr = s.split("");

    for (var i in check) {
        for (var j in arr) {
            if (check[i] == arr[j]) {
                arr[j] = "";
                check.splice(i, 1);
            }
        }
    }
    if (check.length == 0) {
        return "YES";
    }
    else {
        return "NO";
    }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = hackerrankInString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
