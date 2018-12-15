'use strict';
var calculate_average = function (collection) {
  return compute_average(choose_even(collection));
};
function choose_even(collection) {
  return collection.filter(function (element, index, self) {
    return index % 2;
  });

}
function compute_average(collection) {
  var sum = collection.reduce(function (preEle, ele) {
    return preEle + ele;
  });
  return Math.round(sum / collection.length);
}

module.exports = calculate_average;
