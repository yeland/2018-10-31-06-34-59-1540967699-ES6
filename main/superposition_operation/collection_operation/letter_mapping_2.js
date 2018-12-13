'use strict';

function average_to_letter(collection) {
  return number_map_to_word(compute_average(collection));
  //在这里写入代码
}
function compute_average(collection) {
  var sum = collection.reduce(function (preEle, ele) {
    return preEle+ele;
  });
  return Math.ceil(sum/collection.length);
}
var number_map_to_word = function(collection){
  return String.fromCharCode(0x60+collection);
};
module.exports = average_to_letter;

