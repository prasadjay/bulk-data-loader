"use strict";

var _require = require("uuid"),
  uuidv4 = _require.v4;
function getTimeDiff(t1, t2) {
  var timeType = "seconds";
  var diff = (t2 - t1) / 1000;
  if (diff / 1000 / 60 > 1) {
    diff = diff / 1000 / 60;
    timeType = "minutes";
  }
  return {
    diff: diff,
    timeType: timeType
  };
}
function getBatchSet(count) {
  var list = [];
  for (var x = 0; x < count; x++) {
    list.push(getDataRecord());
  }
  return list;
}
function getDataRecord() {
  var uu1 = getUuid();
  var uu2 = getUuid();
  var uu3 = getUuid();
  return {
    val_1: uu1,
    val_2: uu1,
    val_3: uu1,
    val_4: uu2,
    val_5: uu2,
    val_6: uu2,
    val_7: uu3,
    val_8: uu3,
    val_9: uu3
  };
}
function getUuid() {
  return uuidv4();
}
var sleep = function sleep(ms) {
  return new Promise(function (r) {
    return setTimeout(r, ms);
  });
};
module.exports.getBatchSet = getBatchSet;
module.exports.getTimeDiff = getTimeDiff;
module.exports.sleep = sleep;