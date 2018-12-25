'use strict';

let median_to_letter = collection => number_map_to_word_over_26(compute_median(collection));
let compute_median = collection => {
  collection.sort((val1, val2) => val1 - val2);
  if (collection.length % 2 == 0) {
    return even_median(collection);
  } 
  return odd_median(collection);
}
let even_median = collection => {
  let even = (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
  return Math.ceil(even);
}
let odd_median = collection => collection[Math.floor(collection.length / 2)];

let number_map_to_word_over_26 = item => {
  if (item <= 26) {
    return String.fromCharCode(96 + item);
  } else {
    let first = 96 + Math.floor((item - 1) / 26);
    let second = 97 + (item - 1) % 26;
    return String.fromCharCode(first, second);
  }
};
module.exports = median_to_letter;
