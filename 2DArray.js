function hourglassSum(arr) {

    var max_sum = -100;

    for (var i = 0; i < 4; i++){

        for (var j = 0; j < 4; j++){
            var sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2]) + arr[i + 1][j + 1] + (arr[i +                2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]);

            max_sum=Math.max(sum,max_sum)
        }
        
    }