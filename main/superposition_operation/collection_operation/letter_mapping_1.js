'use strict';

function even_to_letter(collection) {
  return number_map_to_word(choose_even(collection));
}
function choose_even(collection) {
  return collection.filter(function (element) {
    return element % 2 == 0;
  });
}

var number_map_to_word = function (collection) {
  return collection.map(function (item) {
    return String.fromCharCode(0x60 + item);
  })
};
module.exports = even_to_letter;
