'use strict';

let choose_no_repeat_number = collection => collection.filter((element, index, self) =>
  self.indexOf(element) === index);

module.exports = choose_no_repeat_number;
