'use strict';

let compute_median = collection => {
  collection.sort((val1, val2) => val1 - val2);
  if (collection.length % 2 == 0) {
    return even_median(collection);
  }
  return odd_median(collection);
}
let even_median = collection => (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
let odd_median = collection => collection[Math.floor(collection.length / 2)];

module.exports = compute_median;


