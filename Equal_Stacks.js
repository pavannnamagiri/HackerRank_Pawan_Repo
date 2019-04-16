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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the equalStacks function below.
 */
function equalStacks(h11, h22, h33) {
    /*
     * Write your code here.
     */
    var s1 = 0, s2 = 0, s3 = 0;
    var h1 = h11.reverse();
    var h2 = h22.reverse();
    var h3 = h33.reverse();

    for (let i in h1) {
        s1 = s1 + h1[i];
    }
    for (let i in h2) {
        s2 = s2 + h2[i];
    }
    for (let i in h3) {
        s3 = s3 + h3[i];
    }

    if (s1 == s2 && s2 == s3) {
        return s1;
    }

    while (true) {
        if (s1 >= s2 && s1 >= s3) {
            let num = h1.pop();
            s1 = s1 - num;
            if (s1 == s2 && s1 == s3) {
                return s1;
            }

        }
        if (s2 >= s3 && s2 >= s1) {
            let num = h2.pop();
            s2 = s2 - num;
            if (s1 == s2 && s2 == s3) {
                return s2;
            }

        }
        if (s3 >= s2 && s3 >= s1) {
            let num = h3.pop();
            s3 = s3 - num;
            if (s3 == s2 && s1 == s3) {
                return s3;
            }

        }
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n1N2N3 = readLine().split(' ');

    const n1 = parseInt(n1N2N3[0], 10);

    const n2 = parseInt(n1N2N3[1], 10);

    const n3 = parseInt(n1N2N3[2], 10);

    const h1 = readLine().split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().split(' ').map(h3Temp => parseInt(h3Temp, 10));

    let result = equalStacks(h1, h2, h3);

    ws.write(result + "\n");

    ws.end();
}
