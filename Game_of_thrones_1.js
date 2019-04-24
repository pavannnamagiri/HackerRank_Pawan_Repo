function processData(input) {
    var word = input.trim().split("").sort(function (x1, x2) { if (x1 < x2) return -1; if (x1 > x2) return 1;return 0 }).join("").trim();
    var s = false;
    
    // console.log(word);
    
    var i = 0, le = word.length;
    var len = 0;
    
    while ( i < le )
    {
        len = word.lastIndexOf(word[i]) - word.indexOf(word[i]) + 1;
        if ( len % 2 === 1 )
        {
            if ( s )
            {
                console.log('NO');
                return false;
            }
            
            s = true;
        }
        i += len;
    }
    console.log("YES");
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
