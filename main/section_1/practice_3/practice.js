let collect_same_elements = (collection_a, object_b) => choose_common_elements(collection_a, object_b.value);

let choose_common_elements = (collection_a, collection_b) => collection_a.filter(element =>
  collection_b.includes(element));

module.exports = collect_same_elements;
