function collect_same_elements(collection_a, object_b) {
  var collection_value = map_to_values(collection_a);
  var collection_b = object_b.value;
  return choose_common_elements(collection_value,collection_b);
}
function map_to_values(collection){
  return collection.map(function (item) {
    return item.key;
  })
}
function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(function (element){
    return collection_b.includes(element);
  });
}

module.exports = collect_same_elements;
