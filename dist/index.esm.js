import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
var arrchunk = function arrchunk(listraw, size) {
  var list = _toConsumableArray(listraw);
  return _toConsumableArray(Array(Math.ceil(list.length / size))).map(function () {
    return list.splice(0, size);
  });
};
export { arrchunk };
