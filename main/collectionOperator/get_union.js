'use strict';

function get_union(collection_a, collection_b) {
  var intersection = collection_b.filter(function (element){
    return !collection_a.includes(element);
  });
  return collection_a.concat(intersection);
  //在这里写入代码
}

module.exports = get_union;

