'use strict';

function choose_common_elements(collection_a, collection_b) {
  var commen= collection_a.filter(function (element){
    return collection_b.includes(element);
  });
  return commen;
  //在这里写入代码
}

module.exports = choose_common_elements;
