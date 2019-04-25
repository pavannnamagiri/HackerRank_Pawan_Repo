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

// Complete the isValid function below.
function isValid(s) {
    var arr = s.split("");
    
    var countArr = [];
    var count = 1;

    for (var i = 0; i < arr.length; i++) {
        
        for (var j = i + 1; j < arr.length; j++){
            if (arr[i] == arr[j]) {
                count++;
                arr.splice(j,1);
            }
            
        }
        countArr.push(count);

        console.log(arr[i] + "=" + count);
        count = 1;
    }

    var flag = 0;
    for (var k in countArr) {
        if (countArr[k] > 1) {
            flag++;
        }
        
    }

    if (flag > 1) {
        return "NO";
    }
    else {
        return "YES";
    }
    // else if(flag==1 ) {
    //     return "YES";
    // }
    // else if (flag < 0) {
    //     return "YES";
    // }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
