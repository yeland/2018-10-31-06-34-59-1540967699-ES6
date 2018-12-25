'use strict';

let compare_collections = (collection_a, collection_b) =>
  collection_a.join("") === collection_b.join("");

module.exports = compare_collections;


