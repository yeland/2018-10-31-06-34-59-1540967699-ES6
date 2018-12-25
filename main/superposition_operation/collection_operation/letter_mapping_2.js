'use strict';

let average_to_letter = collection => number_map_to_word(compute_average(collection));
let compute_average = collection => {
  const sum = collection.reduce((preEle, ele) => preEle + ele);
  return Math.ceil(sum / collection.length);
}
let number_map_to_word = number => String.fromCharCode(0x60 + number);

module.exports = average_to_letter;

