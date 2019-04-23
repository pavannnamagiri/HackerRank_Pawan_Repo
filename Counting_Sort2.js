function arrayInputToInts(array){

    var i = array.length;

    while(i--) {
        array[i] = parseInt(array[i]);
    }
    
    return array;
    
};

function countTimes(array, what){

    var i = array.length,
        result = 0;

    while(i--) {
        if(array[i] === what ){
            result++;
        } 
    }
    
    return result;    
    
};

function processData(input) {
    //Enter your code here
    
    var lines = input.split("\n"),
        array,
        i = 0,
        j = 0,
        result = [],
        output = [];

    // clean the input to its meaning
    array = arrayInputToInts(lines[1].split(" "));
    
    for(i=0;i<=99;i++){
      result.push(countTimes(array, i));
    }
    
    for(i=0;i<=99;i++){
        for(j=0;j<result[i];j++){
            output.push(i);
        }
    }
    
    console.log(output.join(" "));
    
    

};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
