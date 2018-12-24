'use strict';

let get_intersection = (collection_a, collection_b) => collection_b.filter(
  element => collection_a.includes(element));

module.exports = get_intersection;
