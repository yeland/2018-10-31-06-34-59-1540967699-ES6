'use strict';

function median_to_letter(collection) {
  return number_map_to_word_over_26(compute_median(collection));
}
function compute_median(collection) {
  var mid;
  collection.sort(function (val1, val2) {
    return val1 - val2;
  });
  if (collection.length % 2 == 0) {
    mid = (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
  } else {
    mid = collection[Math.floor(collection.length / 2)];
  }
  return Math.ceil(mid);
}

var number_map_to_word_over_26 = function (item) {
  if (item <= 26) {
    return String.fromCharCode(96 + item);
  } else {
    let first = 96 + Math.floor((item - 1) / 26);
    let second = 97 + (item - 1) % 26;
    return String.fromCharCode(first, second);
  }
};
module.exports = median_to_letter;
