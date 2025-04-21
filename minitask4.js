const palindromDetector = (item) => {
  const changeWords = item.toLowerCase();
  const words = changeWords.split("");
  const reversWords = words.reverse();
  const stringWord = reversWords.join("");
  return stringWord;
};

const textPalindrom = "malam";
const reversString = palindromDetector(textPalindrom);
if (reversString === textPalindrom) {
  console.log(`${reversString} adalah Palindrom`);
} else {
  console.log(`${reversString} Bukan Palindrom`);
}

const reversWords = (str) => {
  const changeWords = str.toLowerCase();
  const words = changeWords.split(" ");
  const reversWords = words.reverse();
  const stringWord = reversWords.join("");
  return stringWord;
};

const textReserve = "Hello Word";
const result = reversWords(textReserve);
console.log(result);
