'use strict';

let average_uneven = collection => compute_average(choose_odd(collection));
let choose_odd = collection => collection.filter(element => element % 2);
let compute_average = collection => {
  const sum = collection.reduce((preEle, ele) => preEle + ele);
  return Math.round(sum / collection.length);
}

module.exports = average_uneven;
