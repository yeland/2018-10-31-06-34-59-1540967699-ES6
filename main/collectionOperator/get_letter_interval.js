'use strict';

function get_letter_interval(number_a, number_b) {
  var letter = get_integer_interval(number_a,number_b);
  return number_map_to_word(letter);
}
function get_integer_interval(number_a, number_b) {
  var collection = new Array();
  if (number_a < number_b) {
    for(let i=number_a;i<=number_b;i++) {
      collection.push(i);
    }
  } else {
    for(let i=number_a;i>=number_b;i--) {
      collection.push(i);
    }
  }
  return collection;
}
var number_map_to_word = function(collection){
  return collection.map(function(item){
    return String.fromCharCode(96+item);
  })
};
module.exports = get_letter_interval;
