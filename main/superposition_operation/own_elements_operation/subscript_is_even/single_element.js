'use strict';
var single_element = function(collection){
  return choose_no_repeat_number(choose_even(collection));
};
function choose_no_repeat_number(collection) {
  return collection.filter(function (element,index,self) {
    return self.lastIndexOf(element) === self.indexOf(element);
  });
}
function choose_even(collection) {
  return collection.filter(function (element, index, self) {
    return index % 2;
  });
}

module.exports = single_element;
