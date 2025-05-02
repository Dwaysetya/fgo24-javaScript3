const word = "malam";
console.log(
  word.split("").reverse().join("") === word ? "palindrom" : "Bukan palindrome"
);

// built in method
const reverseWords = (str) => {
  return str.toLowerCase().split(" ").reverse().join("");
};

const text = "Hello Word";
const result = reverseWords(text);
console.log(result);

// palindrom
const kalimat = "malam";
let hasil = "";

for (let x = 0; x < kalimat.length; x++) {
  hasil = hasil + kalimat[x];
}
if (hasil === kalimat) {
  console.log("palindrom");
} else {
  console.log("Bukan palindrom");
}

// manual
const reverse = "apa itu";
let resultReverse = "";
let penampung = "";

for (let i = reverse.length - 1; i >= 0; i--) {
  if (reverse[i] == " ") {
    resultReverse += penampung + " ";
    penampung = "";
  } else {
    penampung = reverse[i] + penampung;
  }
}
resultReverse += penampung;
console.log(resultReverse);
