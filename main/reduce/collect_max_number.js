'use strict';

let collect_max_number = collection => collection.reduce((preEle, ele) => (preEle > ele) ? preEle : ele);

module.exports = collect_max_number;
