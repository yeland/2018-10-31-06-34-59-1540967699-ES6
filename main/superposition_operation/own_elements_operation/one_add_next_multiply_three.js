'use strict';
function one_add_next_multiply_three(collection) {
  var result = collection.map(function (item, index, self) {
    if (index < self.length - 1) {
      return 3 * (item + self[index + 1]);
    }
  })
  result.pop();
  return result;
}
module.exports = one_add_next_multiply_three;
