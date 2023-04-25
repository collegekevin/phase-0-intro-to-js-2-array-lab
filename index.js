// // Write your solution here! 
  

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
    
function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
}

function appendCat(name){
    const newLastCat = [...cats, (name)];
    return newLastCat;
}

function prependCat(name){
    const newFirstCat = [(name), ...cats];
    return newFirstCat;
}

function removeLastCat(){
    const lostLastCat = cats.slice(0, -1);
    return lostLastCat;
}

function removeFirstCat(){
    const lostFirstCat = cats.slice(1);
    return lostFirstCat;
}







