'use strict';

function even_to_letter(collection) {
  return number_map_to_word(choose_even(collection));
  //在这里写入代码
}
function choose_even(collection) {
  //在这里写入代码
  var even = collection.filter(function (element) {
    return element%2 == 0;
  });
  return even;
}

var number_map_to_word = function(collection){
  var word = collection.map(function(item){
    return String.fromCharCode(0x60+item);
  })
  return word;
};
module.exports = even_to_letter;
