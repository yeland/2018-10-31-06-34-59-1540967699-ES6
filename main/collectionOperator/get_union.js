'use strict';

let get_union = (collection_a, collection_b) => collection_a.concat(collection_b.filter(element =>
  !collection_a.includes(element)));

module.exports = get_union;

