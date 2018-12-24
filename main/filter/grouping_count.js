'use strict';

let grouping_count = collection => {
  return collection.reduce((allEle, ele) => {
    if (ele in allEle) {
      allEle[ele]++;
    } else {
      allEle[ele] = 1;
    }
    return allEle;
  }, {});
}

module.exports = grouping_count;
