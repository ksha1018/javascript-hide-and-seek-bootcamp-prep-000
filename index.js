function getFirstSelector(selector){
  const a = document.querySelector(selector);
  return a;
}

function nestedTarget(){
  const b = document.querySelector('#nested .target');
  return b;
}


//getFirstSelector('div');
console.log(nestedTarget);



