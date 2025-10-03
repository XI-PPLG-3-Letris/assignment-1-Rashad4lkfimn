//  program Kalkulator Sederhana

//    program kalkulator sederhana 
//    req 
//         Menggunakan Variabel ES6
//         menggunakan Arrow Function 
//         Menggunakan Operator => +, -, *,/, **/ %




let a = 10;
let b = 5;

const tambah  = (a, b) => a + b;
const kurang  = (a, b) => a - b;
const kali    = (a, b) => a * b;
const bagi    = (a, b) => a / b;
const pangkat = (a, b) => a ** b;
const mod     = (a, b) => a % b;


console.log("Nilai a =", a);
console.log("Nilai b =", b);
console.log("Tambah =", tambah(a, b));
console.log("Kurang =", kurang(a, b));
console.log("Kali   =", kali(a, b));
console.log("Bagi   =", bagi(a, b));
console.log("Pangkat=", pangkat(a, b));
console.log("Modulus=", mod(a, b));