function collect_same_elements(collection_a, object_b) {
  var collection_value = map_to_values(collection_a);
  var collection_b = object_b.value;
  return choose_common_elements(collection_value,collection_b);
  //在这里写入代码
}
function map_to_values(collection){
  var b = collection.map(function (item) {
    return item.key;
  })
  return b;
}
function choose_common_elements(collection_a, collection_b) {
  var commen= collection_a.filter(function (element){
    return collection_b.includes(element);
  });
  return commen;
}

module.exports = collect_same_elements;
