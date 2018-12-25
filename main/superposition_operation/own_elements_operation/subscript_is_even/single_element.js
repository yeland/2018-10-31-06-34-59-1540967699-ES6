'use strict';

let single_element = collection => choose_no_repeat_number(choose_even(collection));
let choose_no_repeat_number = collection => collection.filter((element, index, self) =>
  self.lastIndexOf(element) === self.indexOf(element));

let choose_even = collection => collection.filter((element, index, self) => index % 2);

module.exports = single_element;
