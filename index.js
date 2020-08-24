let regex1 = /^[A-Z]/;
let data = prompt("Regex1");
let result = regex1.test("Id");

if (result){
    document.write('Huruf pertama adalah huruf besar');
} else {
    document.write('Huruf pertama adalah huruf kecil');
}

let regex2 = /\d{10,12}/;
let data2 = prompt("Regex1");
console.log(regex2.test('082172243443'));

let search1 = /^Bagaimana cara memulai usaha bisnis$/;
console.log(search1.test('Bagaimana cara memulai usaha bisnis'));

let search2 = /^Bootcamp impact byte$/;
console.log(search2.test('Bootcamp impact byte'));

let search3 = /^Status covid hari ini$/;
console.log(search3.test('Status covid hari ini'));