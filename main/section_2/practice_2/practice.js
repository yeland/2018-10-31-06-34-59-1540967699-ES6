function count_same_elements(collection) {
  var same_object = grouping_count(collection);
  var arr = new Array();
  for (let ele in same_object) {
    let single = new Object();
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
  let single = new Object();
  if (ele.length == 1) {
    single.key = ele;
    single.count = 1;
  } else {
    single.key = ele.slice(0, 1);
    single.count = parseInt(ele.slice(2));
  }
  return single;
}
module.exports = count_same_elements;
