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

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list');
  const firstList = rankedLists[0];
  const secondList = rankedLists[1];

  var children = firstList.children;
  var start = 1;
  for (var i = 0, l = children.length; i < l; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + start + i + n;
  }

  children = secondList.children;
  start = 12;

  for (var i = 0, l = children.length; i < l; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML)+ start - i + n;
  }
}


//getFirstSelector('div');
console.log(nestedTarget());
console.log(deepestChild());



