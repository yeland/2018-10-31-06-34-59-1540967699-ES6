'use strict';

function compute_chain_median(collection) {
  var collection = '1->4->6->2->3->10->9->8->11->20->19->30';
  var chain = collection.split("->");
  var chain_number = map_to_number(chain);
  return compute_median(chain_number);
}
function map_to_number(collection) {
  return collection.map(function (item) {
    return parseInt(item);
  })
}
function compute_median(collection) {
  var mid;
  collection.sort(function (val1, val2) {
    return val1 - val2;
  });
  if (collection.length % 2 == 0) {
    return even_median(collection);
  } else {
    return odd_median(collection);
  }
}
function even_median(collection) {
  return (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
}
function odd_median(collection) {
  return collection[Math.floor(collection.length / 2)];
}

module.exports = compute_chain_median;
