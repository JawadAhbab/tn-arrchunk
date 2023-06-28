'use strict';

var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray");
var arrchunk = function arrchunk(listraw, size) {
  var list = _toConsumableArray(listraw);
  return _toConsumableArray(Array(Math.ceil(list.length / size))).map(function () {
    return list.splice(0, size);
  });
};
exports.arrchunk = arrchunk;
