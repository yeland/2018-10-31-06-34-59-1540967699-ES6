'use strict';

function average_to_letter(collection) {
  return number_map_to_word(compute_average(collection));
}
function compute_average(collection) {
  var sum = collection.reduce(function (preEle, ele) {
    return preEle + ele;
  });
  return Math.ceil(sum / collection.length);
}
function number_map_to_word(collection) {
  return String.fromCharCode(0x60 + collection);
};

module.exports = average_to_letter;

