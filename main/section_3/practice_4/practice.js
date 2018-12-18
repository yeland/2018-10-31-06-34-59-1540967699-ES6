function create_updated_collection(collection_a, object_b) {
  var collection_b = object_b.value;
  var collection = count_same_elements(collection_a);
  return collection.map(function (element) {
    if (collection_b.includes(element.key)) {
      element.count -= Math.floor(element.count / 3);
    }
    return element;
  })
}
function count_same_elements(collection) {
  var same_object = grouping_count(collection);
  var arr = [];
  for (let ele in same_object) {
    let single = {};
    single.key = ele;
    single.count = same_object[ele];
    arr.push(single);
  }
  return arr;
}
function grouping_count(collection) {
  var group = collection.reduce(function (allEle, ele) {
    var object_a = compute_count(ele);
    if (object_a.key in allEle) {
      allEle[object_a.key] += object_a.count;
    } else {
      allEle[object_a.key] = object_a.count;
    }
    return allEle;
  }, {});
  return group;
}
function compute_count(ele) {
  let single = {};
  if (ele.length == 1) {
    single.key = ele;
    single.count = 1;
  } else {
    single.key = ele.slice(0, 1);
    single.count = parseInt(ele.slice(2));
  }
  return single;
}
module.exports = create_updated_collection;
