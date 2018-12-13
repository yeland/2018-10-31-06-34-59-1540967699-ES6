'use strict';

function double_to_one(collection) {
  var one = collection.reduce(function (array_1,array_2){
    return array_1.concat(array_2);
  },[])
  return choose_no_repeat_number(one);
  //在这里写入代码
}
function choose_no_repeat_number(collection) {
  var number = collection.filter(choose);
  return number;
  //在这里写入代码
}
function choose(element,index,self) {
  return self.indexOf(element) === index;
}
module.exports = double_to_one;
