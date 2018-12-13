'use strict';
var number_map_to_word_over_26 = function (collection) {
  var word = collection.map(function (item) {
    if (item <= 26) {
      return String.fromCharCode(0x60 + item);
    } else if(!(item%26)) {
      return String.fromCharCode(0x60 + item/26-1)+String.fromCharCode(0x60 + 26);
    } else {
      return String.fromCharCode(0x60 + Math.floor(item/26))+String.fromCharCode(0x60 + item%26);
    }
  })
  return word;
};

module.exports = number_map_to_word_over_26;
