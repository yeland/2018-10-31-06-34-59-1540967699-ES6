'use strict';

let choose_divisible_integer = (collection_a, collection_b) => collection_a.filter(element_a =>
  collection_b.some(element_b => !(element_a % element_b)))

module.exports = choose_divisible_integer;
