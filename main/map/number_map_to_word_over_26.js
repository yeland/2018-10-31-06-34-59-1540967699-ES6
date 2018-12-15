'use strict';
var number_map_to_word_over_26 = function (collection) {
  var word = collection.map(function (item) {
    if (item <= 26) {
      return String.fromCharCode(96 + item);
    } else {
      let first = 96 + Math.floor((item-1)/26);
      let second = 97 + (item-1)%26;
      return String.fromCharCode(first,second);
    }
  })
  return word;
};

module.exports = number_map_to_word_over_26;
