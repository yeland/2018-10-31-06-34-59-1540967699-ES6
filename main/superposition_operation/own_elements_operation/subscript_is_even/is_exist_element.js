'use strict';

let is_exist_element = (collection, element) => choose_even(collection).includes(element);
let choose_even = collection => collection.filter((element, index, self) => !(index % 2));

module.exports = is_exist_element;
