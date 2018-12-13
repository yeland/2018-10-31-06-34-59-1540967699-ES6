'use strict';

function get_letter_interval_2(number_a, number_b) {
  var letter_2 = get_integer_interval(number_a,number_b);
  return number_map_to_word_over_26(letter_2);
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
}
var number_map_to_word_over_26 = function (collection) {
  var word = collection.map(function (item) {
    if (item <= 26) {
      return String.fromCharCode(0x60 + item);
    } else if(!(item%26)) {
      return String.fromCharCode(0x60 + item/26-1)+String.fromCharCode(0x60 + 26);
    } else {
      return String.fromCharCode(0x60 + Math.floor(item/26))+String.fromCharCode(0x60 + item%26);
    }
  })
  return word;
};
module.exports = get_letter_interval_2;

