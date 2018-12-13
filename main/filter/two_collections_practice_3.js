'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var integer = collection_a.filter(function (element_a){
    return collection_b.some(function(element_b){
      return !(element_a%element_b);
    })
  })
  return integer;
  //在这里写入代码
}

module.exports = choose_divisible_integer;
