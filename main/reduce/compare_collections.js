'use strict';

function compare_collections(collection_a, collection_b) {
  var string_a = collection_a.join("");
  var string_b = collection_b.join("");
  return string_a == string_b;
  //在这里写入代码
}

module.exports = compare_collections;


