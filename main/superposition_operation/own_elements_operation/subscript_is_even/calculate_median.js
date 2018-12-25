'use strict';
let calculate_median = collection => compute_median(choose_even(collection));
let choose_even = collection => collection.filter((element, index, self) => index % 2);
let compute_median = collection => {
  collection.sort((val1, val2) => val1 - val2);
  if (collection.length % 2 == 0) {
    return (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
  } 
  return collection[Math.floor(collection.length / 2)];
}

module.exports = calculate_median;
