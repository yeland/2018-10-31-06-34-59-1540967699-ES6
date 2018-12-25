'use strict';
let one_add_next_multiply_three = collection => {
  let result = collection.map((item, index, self) => {
    if (index < self.length - 1) {
      return 3 * (item + self[index + 1]);
    }
    return item;
  })
  result.pop();
  return result;
}
module.exports = one_add_next_multiply_three;
