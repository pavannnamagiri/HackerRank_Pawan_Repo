function getSecondLargest(nums) {
    // Complete the function
    
    let largest = 0;
    let slargest = 0;
    for (var i = 0; i < nums.length; i++){
        if (nums[i] > largest) {

            slargest = largest;
            largest = nums[i];
        }
        else if (nums[i] > slargest && nums[i] != largest) {
            slargest = nums[i];
        }
    }

    return slargest;
}
