function collect_same_elements(collection_a, object_b) {
  var collection_b = object_b.value;
  return choose_common_elements(collection_a,collection_b);
  //在这里写入代码
}
function choose_common_elements(collection_a, collection_b) {
  var commen= collection_a.filter(function (element){
    return collection_b.includes(element);
  });
  return commen;
}
module.exports = collect_same_elements;
