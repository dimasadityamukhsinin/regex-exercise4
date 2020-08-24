let regex = /^[A-Z]/;
let result = regex.test("Id");

if (result){
    document.write('Huruf pertama adalah huruf besar');
} else {
    document.write('Huruf pertama adalah huruf kecil');
}