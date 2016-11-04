"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, Utility;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      Utility = function () {
        function Utility() {
          _classCallCheck(this, Utility);
        }

        _createClass(Utility, null, [{
          key: "objToURLParam",
          value: function objToURLParam(obj) {
            var str = "";
            for (var key in obj) {
              if (str != "") {
                str += "&";
              }
              str += key + "=" + encodeURIComponent(obj[key]);
            }
            return str;
          }
        }, {
          key: "deepCopy",
          value: function deepCopy(obj) {
            return _.map(obj, _.clone);
          }
        }]);

        return Utility;
      }();

      _export("default", Utility);
    }
  };
});
//# sourceMappingURL=utility.js.map
