function getFirstSelector(selector){
  const a = document.querySelector(selector);
  return a;
}

function nestedTarget(){
  const b = document.querySelector('#nested .target');
  return b;
}

function deepestChild(){
  const c = document.querySelector('#grand-node div div div div');
  return c;
}


//getFirstSelector('div');
console.log(nestedTarget());
console.log(deepestChild());



