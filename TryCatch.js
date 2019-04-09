function reverseString(s) {
    
    try {
        
            let ans= s.split("").reverse().join("");
    

        console.log(ans);
        
    } catch (e) {
        console.log(e.message);
        console.log(s);
    }

}
