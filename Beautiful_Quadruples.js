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
 * Complete the beautifulQuadruples function below.
 */
function beautifulQuadruples(a, b, c, d) {
    const [A, B, C, D] = [a, b, c, d].sort((A, B) => { if (A < B) { return -1; } else if (A > B) { return 1; } return 0; });
    let quadruples = -1 / 24 * A * (A * A * A - 2 * A * A * (2 * D + 3) + A * (-6 * C * C + 6 * C * (2 * D + 1) + 12 * D + 11) - 2 * (2 * B * B * B - 6 * B * B * (D + 1) + B * (-6 * C * C + 12 * C * D + 6 * C + 6 * D + 4) - 3 * C * C + 6 * C * D + 3 * C + 4 * D + 3));
    const memo = {};
    for (let w = 1; w <= A; ++w) {
        for (let x = w; x <= B; ++x) {
            const wx = w ^ x;
            let map = memo[wx];
            if (!map) {
                map = {};
                let runningTotal = 0;
                for (let y = C; y >= 1; --y) {
                    const wxy = wx ^ y;
                    if (y <= wxy && wxy <= D) {
                        map[y] = runningTotal++ + 1;
                    } else {
                        map[y] = runningTotal;
                    }
                }
                memo[wx] = map;
            }
            quadruples -= map[x];
        }
    }
    return Math.round(quadruples);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const abcd = readLine().split(' ');

    const a = parseInt(abcd[0], 10);

    const b = parseInt(abcd[1], 10);

    const c = parseInt(abcd[2], 10);

    const d = parseInt(abcd[3], 10);

    let result = beautifulQuadruples(a, b, c, d);

    ws.write(result + "\n");

    ws.end();
}
