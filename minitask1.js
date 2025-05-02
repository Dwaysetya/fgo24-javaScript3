let nameSiswa1 = [
  ["Dway", "Yusuf", "Reza", "Nanda"],
  ["Osea", "Yasir", "Faisal"],
];

console.log(nameSiswa1.join());

let wadah = "";
for (let i = 0; i < nameSiswa1; i++) {
  temp += nameSiswa1[i];
  if (i !== nameSiswa1.length - 1) {
    temp += ", ";
  }
}
console.log(wadah);
