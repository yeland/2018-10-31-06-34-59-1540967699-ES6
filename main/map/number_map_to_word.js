'use strict';
var number_map_to_word = function(collection){
  var word = collection.map(function(item){
    return String.fromCharCode(0x60+item);
  })
  return word;
};

module.exports = number_map_to_word;
