function collect_same_elements(collection_a, object_b) {
  var collection_b = object_b.value;
  return choose_common_elements(collection_a, collection_b);
}
function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(function (element) {
    return collection_b.includes(element);
  });
}
module.exports = collect_same_elements;
