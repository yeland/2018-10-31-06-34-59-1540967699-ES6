'use strict';
var single_element = function(collection){
  return choose_no_repeat_number(choose_even(collection));
};
function choose_no_repeat_number(collection) {
  var number = collection.filter(function (element,index,self) {
    return self.lastIndexOf(element) === self.indexOf(element);
  });
  return number;
}
function choose_even(collection) {
  var even = collection.filter(function (element, index, self) {
    return index % 2;
  });
  return even;
}
module.exports = single_element;
