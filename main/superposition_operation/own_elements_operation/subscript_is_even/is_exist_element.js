'use strict';
var is_exist_element = function (collection, element) {
  var collection_even = choose_even(collection);
  return collection_even.includes(element);
};
function choose_even(collection) {
  return collection.filter(function (element, index, self) {
    return !(index % 2);
  });
}
module.exports = is_exist_element;
