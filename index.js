// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
  destructivelyAppendCat = cats.push("Ralph");
}


function destructivelyPrependCat() {
    destructivelyPrependCat = cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  destructivelyRemoveLastCat = cats.pop();
}

function destructivelyRemoveFirstCat() {
  destructivelyRemoveFirstCat = cats.shift();
}

function appendCat() {
  const appendCat = cats.slice();
  appendCat.push("Broom");
  return appendCat;
}

function prependCat() {
  const prependCat = cats.slice();
  prependCat.unshift("Arnold");
  return prependCat;
}

function removeLastCat() {
const removeLastCat = cats.slice();
removeLastCat.splice(-1,1);
return removeLastCat;
};

function removeFirstCat() {
  const removeFirstCat = cats.slice();
  removeFirstCat.splice(0,1);
  return removeFirstCat;
}