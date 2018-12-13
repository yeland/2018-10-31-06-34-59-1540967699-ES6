'use strict';

function compute_chain_median(collection) {
  var collection = '1->4->6->2->3->10->9->8->11->20->19->30';
  var chain = collection.split("->");
  var chain_number = map_to_number(chain);
  return compute_median(chain_number);
  //在这里写入代码
}
function map_to_number(collection){
  return collection.map(function (item) {
    return parseInt(item);
  })
}
function compute_median(collection) {
  var mid;
  collection.sort(compare);
  if(collection.length%2==0){
    mid = (collection[collection.length/2-1]+collection[collection.length/2])/2;
  } else {
    mid = collection[Math.floor(collection.length/2)];
  }
  return mid;
  //在这里写入代码
}
function compare (val1, val2) {
  return val1 - val2;
}
module.exports = compute_chain_median;
