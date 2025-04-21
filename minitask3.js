const animal = "ayam,bebek,sapi,unta";

let newAnimal = animal.split(",");
newAnimal.splice(2, 1, "domba");
// newAnimal[2] = "domba";
console.log(newAnimal);
