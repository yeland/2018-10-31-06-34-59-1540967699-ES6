'use strict';

function median_to_letter(collection) {
  return number_map_to_word_over_26(compute_median(collection));
  //在这里写入代码
}
function compute_median(collection) {
  var mid;
  collection.sort(compare);
  if (collection.length % 2 == 0) {
    mid = (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
  } else {
    mid = collection[Math.floor(collection.length / 2)];
  }
  return Math.ceil(mid);
  //在这里写入代码
}
function compare(val1, val2) {
  return val1 - val2;
}
var number_map_to_word_over_26 = function (item) {
  var word;
  if (item <= 26) {
    word = String.fromCharCode(0x60 + item);
  } else if (!(item % 26)) {
    word = String.fromCharCode(0x60 + item / 26 - 1) + String.fromCharCode(0x60 + 26);
  } else {
    word = String.fromCharCode(0x60 + Math.floor(item / 26)) + String.fromCharCode(0x60 + item % 26);
  }
  return word;
};
module.exports = median_to_letter;
