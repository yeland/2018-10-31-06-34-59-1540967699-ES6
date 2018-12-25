let count_same_elements = collection => {
  const same_object = grouping_count(collection);
  let arr = [];
  for (let ele in same_object) {
    arr.push({ key: ele, count: same_object[ele] });
  }
  return arr;
}
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

module.exports = count_same_elements;
