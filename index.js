// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    return cats.push('Ralph');
}

function destructivelyPrependCat() {
    return cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat() {
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat() {
    const addCats = ['Arnold', ...cats];
    return addCats;
}

function removeLastCat() {
    return cats.slice(0, 2);
}

function removeFirstCat() {
    return cats.slice(1);
}