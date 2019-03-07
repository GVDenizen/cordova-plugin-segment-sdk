var exec = require('cordova/exec');

var SegmentSDK = {};

SegmentSDK.identify = function() {
  var args = Array.prototype.slice.call(arguments);

  if (typeof args[0] !== 'string') {
    args.unshift(null);
  }

  exec(null, null, 'SegmentPlugin', 'identify', getNArgs(args, 3));
};

SegmentSDK.group = function() {
  var args = Array.prototype.slice.call(arguments);

  if (typeof args[0] !== 'string') {
    args.unshift(null);
  }

  exec(null, null, 'SegmentPlugin', 'group', getNArgs(args, 3));
};

SegmentSDK.track = function() {
  var args = Array.prototype.slice.call(arguments);

  exec(null, null, 'SegmentPlugin', 'track', getNArgs(args, 3));
};

SegmentSDK.screen = function() {
  var args = Array.prototype.slice.call(arguments);

  if (typeof args[1] !== 'string') {
    args.unshift(null);
  }

  exec(null, null, 'SegmentPlugin', 'screen', getNArgs(args, 4));
};

SegmentSDK.alias = function() {
  var args = Array.prototype.slice.call(arguments);

  exec(null, null, 'SegmentPlugin', 'alias', getNArgs(args, 2));
};

SegmentSDK.reset = function() {
  exec(null, null, 'SegmentPlugin', 'reset', []);
};

SegmentSDK.flush = function() {
  exec(null, null, 'SegmentPlugin', 'flush', []);
};

/*
*
* iOS Only
*
*/

SegmentSDK.enable = function() {
  exec(null, null, 'SegmentPlugin', 'enable', []);
};

SegmentSDK.disable = function() {
  exec(null, null, 'SegmentPlugin', 'disable', []);
};

/*
*
* Android Only
*
*/

SegmentSDK.getSnapshot = function(callbackFn) {
  exec(function(result) {
    callbackFn(result);
  }, null, 'SegmentPlugin', 'getSnapshot', []);
};

/*
*
* Helpers
*
*/

function getNArgs(args, n) {
  var result = [];
  args = args || [];

  for (var i = 0; i < n; i++) {
    result[i] = args[i] === undefined ? null : args[i];
  }

  return result;
}

module.exports = SegmentSDK;