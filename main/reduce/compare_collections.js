'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.join("") === collection_b.join("");
}

module.exports = compare_collections;


