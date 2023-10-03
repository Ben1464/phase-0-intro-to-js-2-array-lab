let cats =  ['Milo','Otis','Garfield'];
function destructivelyAppendCat(){
  cats.push('Ralph');
}
function destructivelyPrependCat(){
  cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
  cats.pop('Bob');
}
function destructivelyRemoveFirstCat(){
  cats.shift('Bob');
}
function appendCat(name){
  const newCats = [...cats, name];
  return newCats;
}

function prependCat(name){
  const newCats = [name, ...cats]
  return newCats;
}

function removeLastCat(){
  const newCats = cats.slice(0,-1)
  return newCats;
}

function removeFirstCat(){
  const newCats = cats.slice(1);
  return newCats;
}