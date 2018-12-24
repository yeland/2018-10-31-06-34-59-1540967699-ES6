'use strict';

let double_to_one = collection => collection.reduce((array_1, array_2) => array_1.concat(array_2), []);

module.exports = double_to_one;
