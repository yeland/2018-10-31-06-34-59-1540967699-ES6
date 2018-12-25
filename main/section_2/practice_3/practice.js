let count_same_elements = collection => {
  const same_object = grouping_count(collection);
  let arr = [];
  for (let ele in same_object) {
    arr.push({ name: ele, summary: same_object[ele] });
  }
  return arr;
}
let grouping_count = collection => {
  return collection.reduce((allEle, ele) => {
    const object_a = compute_count(ele);
    if (object_a.key in allEle) {
      allEle[object_a.key] += object_a.count;
    } else {
      allEle[object_a.key] = object_a.count;
    }
    return allEle;
  }, {});
}
let compute_count = ele => {
  if (ele.length == 1) {
    return { key: ele, count: 1 };
  } else if (ele.indexOf("[") > 0) {
    return { key: ele.slice(0, 1), count: parseInt(ele.slice(2, -1)) };
  } else {
    return { key: ele.slice(0, 1), count: parseInt(ele.slice(2)) };
  }
}

module.exports = count_same_elements;
