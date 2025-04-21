// const palindromDetector = (item) => {
//   const words = item.split("");
//   const reversWords = words.reverse();
//   const stringWord = reversWords.join("");
//   return stringWord;
// };

// const textPalindrom = "malam";
// const reversString = palindromDetector(textPalindrom);
// if (reversString === textPalindrom) {
//   console.log(`${reversString} adalah Palindrom`);
// } else {
//   console.log(`${reversString} Bukan Palindrom`);
// }

// // const word = "kasur"
// // console.log(word.split("").reverse().join("")===word? "palindrom":"Bukan palindrome")

// const reversWords = (str) => {
//   const changeWords = str.toLowerCase();
//   const words = changeWords.split(" ");
//   const reversWords = words.reverse();
//   const stringWord = reversWords.join("");
//   return stringWord;
// };

// const textReserve = "Hello Word";
// const result = reversWords(textReserve);
// // console.log(result);

// const text = "malam";
// let hasil = "";

// for (let x = 0; x < text.length; x++) {
//   hasil = hasil + text[x];
// }
// if (hasil === text) {
//   console.log("palindrom");
// } else {
//   console.log("Bukan palindrom");
// }

const reverse = "apa ini";
let result = "";
let penampung = "";

for (let i = reverse.length - 1; i >= 0; i--) {
  if (reverse[i] == " ") {
    result += penampung + " ";
    penampung = "";
  } else {
    penampung = reverse[i] + penampung;
  }
}
result += penampung;
console.log(result);
