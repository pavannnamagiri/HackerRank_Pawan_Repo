function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    for (var j = 0; j < d; j++) {
        let temp = a[0];
        for (let i = 0; i < a.length - 1; i++) {
            a[i] = a[i + 1];


        }
        a[a.length - 1] = temp;

        
    }
    var res = "";
    for (let i = 0; i < a.length; i++){
        res = res  + a[i]+" ";
    }
    console.log(res)
}
