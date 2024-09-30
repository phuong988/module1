function plusMinus(arr) {
    let count = 0;
    let positiveNumber = 0;
    let negativeNumber = 0;
    for(let i = 0 ; i < arr.length; i++) {
        if(arr[i] > 0) {
            positiveNumber++;
        }else if(arr[i] < 0) {
            negativeNumber++;
        }else {
            count++;
        }
    }
    let ratioPositive = (positiveNumber / arr.length).toFixed(6);
    let ratioNegative = (negativeNumber / arr.length).toFixed(6);
    let ratioZero = (count / arr.length).toFixed(6);
    document.write(ratioPositive +"<br>" + ratioNegative +"<br>"+ratioZero);
}
plusMinus(arr);