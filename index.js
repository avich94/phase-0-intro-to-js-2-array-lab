// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name) {
      cats.push(name);
  };
  
  destructivelyAppendCat("Ralph");
  console.log(cats);

function destructivelyPrependCat(name) {
    cats.unshift(name);
};

destructivelyPrependCat("Bob");
console.log(cats);

function destructivelyRemoveLastCat(name) {
    cats.pop(name);

};

destructivelyRemoveLastCat("Ralph");
console.log(cats);

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);

};

destructivelyRemoveFirstCat("Milo");
console.log(cats);


function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
  
  console.log(appendCat("Broom"));
  console.log(cats);

function prependCat(name) {
    const newCats = [name,...cats];
    return newCats;
  }
  
  console.log(prependCat("Arnold"));
  console.log(cats);

  function removeLastCat() {
    return cats.slice(0, -1);
  }
  
  console.log(removeLastCat());
  console.log(cats);

  function removeFirstCat() {
    return cats.slice(1);
  }
  
  console.log(removeFirstCat());
  console.log(cats);