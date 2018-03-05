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
  const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]

      let children = firstList.children
      let start = 1
      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).toEqual(start + i + 3)
      }

      children = secondList.children
      start = 12

      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).toEqual(start - i + 3)
      }
}

document.querySelectorAll('.ranked-list')

//getFirstSelector('div');
console.log(nestedTarget());
console.log(deepestChild());



