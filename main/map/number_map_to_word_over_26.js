'use strict';
let number_map_to_word_over_26 = collection => {
  return collection.map(item => {
    if (item <= 26) {
      return String.fromCharCode(96 + item);
    } else {
      let first = 96 + Math.floor((item - 1) / 26);
      let second = 97 + (item - 1) % 26;
      return String.fromCharCode(first, second);
    }
  })
};

module.exports = number_map_to_word_over_26;
