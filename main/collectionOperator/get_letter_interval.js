'use strict';

function get_letter_interval(number_a, number_b) {
  var letter = get_integer_interval(number_a,number_b);
  return number_map_to_word(letter);
  //在这里写入代码
}
function get_integer_interval(number_a, number_b) {
  var collection = new Array();
  if (number_a == number_b) {
    collection.push(number_a);
  } else if (number_a < number_b) {
    for(let i=number_a;i<=number_b;i++) {
      collection.push(i);
    }
  } else {
    for(let i=number_a;i>=number_b;i--) {
      collection.push(i);
    }
  }
  return collection;
  //在这里写入代码
}
var number_map_to_word = function(collection){
  var word = collection.map(function(item){
    return String.fromCharCode(0x60+item);
  })
  return word;
};
module.exports = get_letter_interval;
