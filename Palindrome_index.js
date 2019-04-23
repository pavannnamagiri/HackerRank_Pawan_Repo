process.stdin.resume();


process.stdin.setEncoding("utf8");


var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});


process.stdin.on("end", function () {
    processData(_input);
});


function processData(input) {
    var buffer = input.split('\n');
    var n = parseInt(buffer[0].trim());

    for (var i = 1; i <= n; i++) {
        console.log(palindromeIndex(buffer[i]));
    }

}

function palindromeIndex(str) {

    // Early check to see if input is a palindrome.
    if (isPalindrome(str)) return -1;

   
    for (var i = 0, j = str.length - 1; i < Math.floor(str.length / 2); i++ , j--) {
        if (str[i] !== str[j]) {

            if (isPalindrome(str.substring(i, j))) {
                return j;
            }
            else {
                return i;
            }
        }
    }
}


function isPalindrome(str) {

    for (var i = 0, j = str.length - 1; i < Math.floor(str.length / 2); i++ , j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }

    return true;
}
