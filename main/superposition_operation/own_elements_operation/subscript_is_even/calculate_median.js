'use strict';
var calculate_median = function(collection){
  return compute_median(choose_even(collection));
};
function choose_even(collection) {
  var even = collection.filter(function (element, index, self) {
    return index % 2;
  });
  return even;
}
function compute_median(collection) {
  var mid;
  collection.sort(compare);
  if(collection.length%2==0){
    mid = (collection[collection.length/2-1]+collection[collection.length/2])/2;
  } else {
    mid = collection[Math.floor(collection.length/2)];
  }
  return mid;
  //在这里写入代码
}
function compare (val1, val2) {
  return val1 - val2;
}
module.exports = calculate_median;
