let physics = parseFloat(prompt("Nhập điểm Vật lý"));
let chemistry = parseFloat(prompt("Nhập điểm Hóa học:"));
let biology = parseFloat(prompt("Nhập điểm Sinh học"));
let total = physics + chemistry + biology;
let average =total / 3;


    document.write("Điểm môn vật lý: " + physics);
    document.write("Điểm môn Hóa học: " + chemistry);
    document.write("Điểm môn Sinh học: " + biology);
    document.write("Điểm trung bình: " + average.toFixed(2));