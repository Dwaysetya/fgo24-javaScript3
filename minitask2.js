//1. Methode At

// Metode at() dari instance Array mengambil nilai integer dan mengembalikan item pada indeks tersebut,
// yang memungkinkan integer positif dan negatif. Integer negatif menghitung mundur dari item terakhir dalam array.

const studentData = [10, 20, 50, 120, 300, 89, 99];

let index = 2; // Variabel penampung yang mana isinya akan mengecek di dalam sebuah array dalam index ke-2
let result = -3; // Variabel penampung yang mana isinya akan mengecek di dalam sebuah array dalam index ke -3

console.log(
  `Hasil dari index ke - ${index} menghasilkan ${studentData.at(index)}`
);
console.log(
  `Hasil dari index ke - ${result} menghasilkan ${studentData.at(result)}`
);

// 2. Concat adalah instance Array digunakan untuk menggabungkan dua atau lebih array.
// Metode ini tidak mengubah array yang sudah ada, tetapi malah mengembalikan array baru.

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// output : ['a','b','c','d','e','f']

// 3. filter adalah membuat salinan dangkal dari bagian array yang diberikan,
// difilter hingga hanya elemen-elemen dari array yang diberikan yang lulus pengujian yang diterapkan oleh fungsi yang disediakan.

const words = ["spray", "elite", "exuberant", "destruction", "presen"]; // variabel yang berisikan array

const hasil = words.filter((word) => word.length > 6);
// variabel hasil sebagai penampung dalam variabel word mencari dengan .filter kata kata yang mengandung lebih dari 6 huruf

console.log(hasil);

// 4. Join
// membuat dan mengembalikan string baru dengan menggabungkan semua elemen dalam array ini,
// dipisahkan dengan koma atau string pemisah yang ditentukan.
// Jika array hanya memiliki satu item, maka item tersebut akan dikembalikan tanpa menggunakan pemisah.

let nameSiswa1 = [
  ["Dway", "Yusuf", "Reza", "Nanda"],
  ["Osea", "Yasir", "Faisal"],
];

console.log(nameSiswa1.join()); // akan secara langsung menggabungkan kedua isi array menjadi 1
// 5. .Map
// fungsi method ini adalah membaca setiap isi di dalam array

const array = [1, 4, 9, 16]; // Isi di dalam array

const map1 = array.map((x) => x * 2); // fungsi ini akan mengkalikan 2 pada setiap isi di dalam arraynya

console.log(map1);
// output: Array [2, 8, 18, 32]

// 6. .Pop
// Menghapus pada array bagian paling belakang
const plants = ["Dway", "Yusuf", "Reza", "Nanda"];

plants.pop();

console.log(plants);
// output: Array ["Dway", "Yusuf", "Reza", "Nanda"]

// 7. .short
// Mengurutkan isi array dari yang terkecil hingga terbesar ataou jika abjad dari a-z

const myArray = [3, 1, 4, 1, 5, 9, 2, 6];
const nameArray = ["bDway", "aYusuf", "dReza", "cNanda"];
myArray.sort(); // Output: [1, 1, 2, 3, 4, 5, 6, 9]
nameArray.sort();
console.log(myArray); // Output: [1, 1, 2, 3, 4, 5, 6, 9]
console.log(nameArray);

// 8. Split
// Memisahkan sebuah array atau string menjadi sebuah array

const siswa = "Dway,Yusuf,Reza,Nanda"; // string dengan nama nama siswa

console.log(siswa.split(",")[2].split("")); // kemudian output1: [ 'Dway', 'Yusuf', 'Reza' ] output2: [ 'R', 'e', 'z', 'a' ]

// 9. .lastIndexOf
// adalah mengembalikan indeks terakhir tempat elemen tertentu dapat ditemukan dalam array,
// atau -1 jika tidak ada. Array dicari secara terbalik, dimulai dari fromIndex.

const team = ["Dway", "Yusuf", "Reza", "Nanda"];

console.log(team.lastIndexOf("Reza"));
// dengan memasukan nama "reza" kita akan mencari nama "reza" berada di index ke berapa pada array di atas
//output: 2

// 10. .slice
// adalah method untuk mencetak isi dari sebuah array di mana harus menyertakan index keberapa yang ingin di cetak
// parameter 1 untuk index keberapa yang ingin kita mulai cetak \, kemudian parameter ke2 adalah nilai akhir yang tidak kita ingin cetak

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2)); // kode ini akan mencetak animals dari index 2 sampai akhir
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(1, 4)); // kode ini akan mencetak animals dari index 2 sampai akhir
// Expected output: Array ["camel", "duck"]

// 11. .toUpperCase()
// method ini akan mengubah string menjadi huruf kapital semua
const capitalWords = "this is bootcamp";
console.log(capitalWords.toLocaleUpperCase());

//12. String.trim
// adalah untuk menghilangkan spasi dari kedua ujung string ini dan mengembalikan string baru, tanpa mengubah string asli.
const trimString = " Hello World! ";
console.log(trimString); // jika tidak menggunakan trim, hasil pada console.log masih akan terdapat spasi
console.log(trimString.trim()); // dan method trim ini akan menghilangkan spasi pada awal dan akhir kalimat

//13. .toLowerCase()
// method ini akan mengubah huruf capital menjadi huruf kecil semua
const lowerWords = "THIS IS FAZZTRACK";
console.log(lowerWords.toLocaleLowerCase());

//14. subString()
// method ini bertujuan untuk mencetak huruf yang ingin kita cetak menggunakan barisan indexnya

const stringWord = "Mozzarella";
console.log(stringWord.substring(2)); // Jika kita memasukkan 1 parameter "2" maka index ke 2 dari kata akan tercetak hingga akhir kata
console.log(stringWord.substring(2, 4));
// dan jika kita memasukkan 2 parameter "2" kita ingin mencetak dari index keberapa
// kemudian parameter ke 2 yaitu "4" batasana yang ingin kita cetak dimana index ke 4 tidak akan tercetak hurufnya

//15. substr()
// method ini hampir mirip dengan .subString, yang membedakan jika mempunyai 2 parameter . parameter ke2 akan tercetak juga

const worsdsStr = "Mozarella";
console.log(worsdsStr.substr(1, 3)); // index ke 3 akan ikut tercetak

//16. .split()
// method ini akan mengubah string menjadi array dan membagi menjadi beberapa index berdasarkan perintah (" ")
const str = "method ini akan mengubah string menjadi beberapa array";

const cth1 = str.split(" "); // akan mencari kata yang mengandung spasi sebagai jeda untuk menentekukanarray index 1 dan 2
console.log(cth1[3]); // akan mencetak array index ke 3
//output: "mengubah"

const chars = str.split(""); // memberikan masing masing huruf sebagai pemisah antara array index 1 dan ke 2 dan seterusnya
console.log(chars[8]); // mencari index ke-8 dari kata dan akan mencetak hasil sebagai berikut
//output: "n"

//17. replaceAll()
// method ini akan emnggantikan semua kata yang ada dalam sebuah string melalui parameter yang ingin diganti katanya

const paragraph =
  "Di sebuah sawah terdapat domba-domba yang sedang mencari makan!";

console.log(paragraph.replaceAll("domba", "kerbau")); // parameter 1 untuk mencari kata dalam sebuah string yang ingin diganti
// parameter 2 untuk mengganti atau replace kata ingin diganti menjadi apa
//output: "Di sebuah sawah terdapat kerbau-kerbau yang sedang mencari makan!"

//18. repeat()
// method ini membangun dan mengembalikan string baru yang berisi sejumlah salinan string ini, yang dirangkai menjadi satu.
const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`); // parameter 3 adalah jumlah mau berapakali kata "happy ingin di ulang"

//19. padStart()
// method ini akan merahasiakan string di awal
const str1 = "5"; // nilai awal

console.log(str1.padStart(3, "0")); // param 1 akan menjadi patokan untuk kita ingin memiliki panjang berapa
// Expected output: "005", kekosongan number akan diisi dengan param ke2

//contoh penggunaan untuk menginput nomor telepon agar dirahasiakan
const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4); // method ini akan menghitung mundur
const maskedNumber = last4Digits.padStart(fullNumber.length, "*"); // dan kemudian array dari index ke 0 sampai -5 akan di cetak dengan bintang

console.log(maskedNumber);
//output: "************5581"

//20. match()
// method string yang digunakan untuk mencocokkan string terhadap regular expression (regex).
const paragraph1 =
  "Fazztrack, mencetak lulusan untuk siap Bersaing di dunia industri.";
const regex = /[A-Z]/g; // /.../ Ini adalah cara menulis regular expression literal dalam JavaScript.
// [A-Z] Ini berarti satu karakter apa pun dari A sampai Z (huruf besar).
// g => Ini adalah global flag, artinya pencarian dilakukan di seluruh string, bukan berhenti setelah menemukan yang pertama.
const found = paragraph1.match(regex);

console.log(found);
//output: Array ["F", "B"]

// FUNCTION

// 1. apply()
// method function ini digunakan untuk memecah supaya array numbers dapat dipecah menjadi satu persatu
const numbers = [5, 6, 2, 3, 7]; // Math.max([5, 6, 2, 3, 7]) // NaN
const max = Math.max.apply(null, numbers);
// Argumen pertama null adalah nilai untuk this, tapi Math.max tidak menggunakan this, jadi boleh pakai null.
console.log(max);

//2. bind ()
// dalah salah satu metode paling penting dalam JavaScript kalau kamu mau mengontrol nilai this di dalam sebuah fungsi.
// supaya jika menggunakan this tidak undefine
const person = {
  name: "Alice",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  },
};
const boundGreet = person.greet.bind(person);
boundGreet();

//3. length
// method di dalam function ini untuk menghitung ada berapa banyak params di dalam sebuah functioan
function func1() {}

function func2(a, b) {}

console.log(func1.length); // akan mencetak 0 karena di dalam function pertama tidak terdapat parmas
//output: 0

console.log(func2.length); // akan mencetak 2 berdasarkan banyaknya params didalam sebuah function
//  output: 2

// 4. toString()
// method function ini akan mengembalikan fungsi didalam function itu sendiri/ mengubah suatu fungsi menjadi string
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// : "function sum(a, b) {
//                     return a + b;
//                   }"

// 5. call
// method dalam function ini berguna untuk memanggil kembali sebuah fungsi
function Product1(name, price) {
  this.name = name;
  this.price = price;
}

function Food1(name, price) {
  Product1.call(this, name, price);
  this.category = "food";
}

console.log(new Food1("cheese", 50).price);
// Expected output: "cheese"
