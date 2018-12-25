let create_updated_collection = (collection_a, object_b) => {
  const collection_b = object_b.value;
  const collection = count_same_elements(collection_a);
  return collection.map(element => {
    if (collection_b.includes(element.key)) {
      element.count -= Math.floor(element.count / 3);
    }
    return element;
  }) 
}
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
module.exports = create_updated_collection;
