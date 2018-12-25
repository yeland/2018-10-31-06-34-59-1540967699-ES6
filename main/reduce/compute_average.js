'use strict';

let compute_average = collection => {
  let sum = collection.reduce((preEle, ele) => preEle + ele);
  return Math.round(sum / collection.length * 10) / 10;
}

module.exports = compute_average;

