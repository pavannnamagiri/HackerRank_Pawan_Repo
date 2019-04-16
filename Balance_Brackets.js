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

// Complete the isBalanced function below.
function isBalanced(s) {
    var n = s.length - 1;
    var stack = [];
    var c = -1;

    for (var i in s){
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
            c++;
            
        }
        else if (s[i] == ')' && stack[c] == "(" || s[i] == ']' && stack[c] == "[" || s[i] == '}' && stack[c] == "{") {
            c--;
            stack.pop();
        }

        else {
            return "NO";
        }

            
        
    }
    if (stack.length != 0) {
        return "NO";
    }
    else
    return "YES";
   


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}
