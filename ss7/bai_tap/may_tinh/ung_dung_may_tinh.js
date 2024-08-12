
function add() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let ketQua = num1 + num2 ;
    document.getElementById('kq').innerHTML = ketQua ;
}
function subtract() {
    let num1 = parseFloat(document.getElementById('num1').value;
    let num2 = parseFloat(document.getElementById('num2').value;
    let ketQua = num1 - num2;
    document.getElementById('kq').innerText =ketQua;
}
function mutipply() {
    let num1 = parseFloat(document.getElementById('num1').value;
    let num2 = parseFloat(document.getElementById('num2').value;
    let ketQua = num1 * num2;
    document.getElementById('kq').innerText = ketQua;
}
function divide() {
    let num1 = parseFloat(document.getElementById('num1').value;
    let num2 = parseFloat(document.getElementById('num2').value;
    if(num2 !== 0) {
        let ketQua = num1 / num2;
        document.getElementById('kq').innerText = ketQua;
    }else {
        document.getElementById('kq').innerText = 'Error: Division by zero';
    }
}