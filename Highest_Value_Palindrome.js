function processData(input) {
    var lines = input.split(/\n/);
    var info = lines.shift().split(' ').map(Number);
    var n = info.shift();
    var k = info.shift();
    var check = lines.shift().split('').map(Number);
    
    var swaps = 0;
    var swapped = {};

    if (n != k) {
        for (var i = 0; i < check.length / 2; i++) {
            var first = check[i];
            var last  = check[check.length - 1 - i];
            if (first != last) {
                swaps++;
                if (first > last) {
                    check[check.length - 1 - i] = first;
                    swapped[check.length - 1 - i] = 1;
                }
                else {
                    check[i] = last;
                    swapped[i] = 1;
                }
            }
        }
    }

    var j = 0;

    while (j < check.length && (k - swaps >= 2 || (k - swaps >= 1 && (swapped[j] || swapped[check.length - 1 - j])))) {

        if (check[j] != 9) {
            check[j] = check[check.length - 1 - j] = 9;
            if (swapped[j]) {

                swaps--;
            }
            if (swapped[check.length - 1 - j]) {
                swaps--;
            }

            swaps+=2;
        }

        j++;
    }
    
    if (check.length % 2 == 1 && k - swaps >= 1) {
        check[Math.floor(check.length / 2)] = 9
    }

    process.stdout.write(swaps > k ? -1 : check.join(''))
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});







