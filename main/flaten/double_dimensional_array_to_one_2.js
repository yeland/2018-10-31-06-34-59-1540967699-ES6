'use strict';

let double_to_one = collection => choose_no_repeat_number(collection.reduce((array_1, array_2) => 
  array_1.concat(array_2), []));
  
let choose_no_repeat_number = collection => collection.filter((element, index, self) =>
  self.indexOf(element) === index);


module.exports = double_to_one;
