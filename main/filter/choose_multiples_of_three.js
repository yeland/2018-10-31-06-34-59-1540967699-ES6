'use strict';

function choose_multiples_of_three(collection) {
  var three = collection.filter(isThree);
  return three;
  //在这里写入代码
}
function isThree(element) {
  return element%3 == 0;
}

module.exports = choose_multiples_of_three;
