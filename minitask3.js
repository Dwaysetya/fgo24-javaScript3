const animal = "ayam,bebek,sapi,unta";

// let newAnimal = animal.split(",").t;
// newAnimal.splice(2, 1, "domba");
// newAnimal[2] = "domba";
console.log(animal.split(",").toSpliced(2, 1, "domba").join());
