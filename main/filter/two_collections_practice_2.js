'use strict';

let choose_no_common_elements = (collection_a, collection_b) => collection_a.filter(element =>
  !collection_b.includes(element));

module.exports = choose_no_common_elements;
