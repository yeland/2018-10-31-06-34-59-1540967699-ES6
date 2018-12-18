'use strict';

function double_to_one(collection) {
  var one = collection.reduce(function (array_1, array_2) {
    return array_1.concat(array_2);
  }, [])
  return choose_no_repeat_number(one);
}
function choose_no_repeat_number(collection) {
  return collection.filter(function choose(element, index, self) {
    return self.indexOf(element) === index;
  });
}

module.exports = double_to_one;
