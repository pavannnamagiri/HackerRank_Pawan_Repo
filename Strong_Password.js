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

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong

    var num = "0123456789", upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", low = "abcdefghijklmnopqrstuvwxyz", symb = "!@#$%^&*()-+";
    var count = 0;
    for (let i in num) {
        if (password.includes(num[i])) {
            count++;
            break;
            
        }
    }
    for (let i in upp) {
        if (password.includes(upp[i])) {
            count++;
            break;

        }
    }
    for (let i in low) {
        if (password.includes(low[i])) {
            count++;
            break;

        }
    }
    for (let i in symb) {
        if (password.includes(symb[i])) {
            count++;
            break;

        }
    }

    var x = 4;
    if (n >= 6) {
        return x - count;
    }
    else {
        return 6 - n;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
