"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.store = exports.db = void 0;

var _dexie = _interopRequireDefault(require("dexie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var db = function () {
  var db = new _dexie.default("storage_database");
  db.version(1).stores({
    storage: 'key, value'
  });
  return db;
}();

exports.db = db;

var removeByKey =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(key) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (key) {
              _context.next = 2;
              break;
            }

            throw new Error("Key is not provided");

          case 2:
            return _context.abrupt("return", db.storage.delete(key));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function removeByKey(_x) {
    return _ref.apply(this, arguments);
  };
}();

var clearAll =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", db.storage.clear());

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function clearAll() {
    return _ref2.apply(this, arguments);
  };
}();

var storeByKey =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(key, value) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", db.storage.put({
              key: key,
              value: value
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function storeByKey(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

var getAll =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var storage;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return db.storage.toArray();

          case 2:
            storage = _context4.sent;
            return _context4.abrupt("return", storage.reduce(function (acc, elem) {
              return Object.assign(acc, _defineProperty({}, elem.key, elem.value));
            }, {}));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getAll() {
    return _ref4.apply(this, arguments);
  };
}();

var getByKey =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(key) {
    var data;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return db.storage.get(key);

          case 2:
            data = _context5.sent;
            return _context5.abrupt("return", data ? data.value : undefined);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getByKey(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

var storeFromObject =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(obj) {
    var data;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            data = Object.entries(obj).map(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  key = _ref8[0],
                  value = _ref8[1];

              return {
                key: key,
                value: value
              };
            });
            return _context6.abrupt("return", db.storage.bulkPut(data));

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function storeFromObject(_x5) {
    return _ref6.apply(this, arguments);
  };
}();

var hasKey =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(key) {
    var data;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return getByKey(key);

          case 2:
            data = _context7.sent;
            return _context7.abrupt("return", !!data);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function hasKey(_x6) {
    return _ref9.apply(this, arguments);
  };
}();

var size =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8() {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", db.storage.toCollection().count());

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function size() {
    return _ref10.apply(this, arguments);
  };
}();

var add =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(key, value) {
    var data;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return getByKey(key);

          case 2:
            data = _context9.sent;

            if (!(Array.isArray(value) && Array.isArray(data))) {
              _context9.next = 5;
              break;
            }

            return _context9.abrupt("return", storeByKey(key, value.concat(data)));

          case 5:
            if (!(_typeof(value) === "object" && _typeof(data) === "object")) {
              _context9.next = 7;
              break;
            }

            return _context9.abrupt("return", storeByKey(key, Object.assign(data, value)));

          case 7:
            return _context9.abrupt("return", storeByKey(key, value));

          case 8:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function add(_x7, _x8) {
    return _ref11.apply(this, arguments);
  };
}();

var store =
/*#__PURE__*/
function () {
  var _ref12 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(key, value) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            if (!(_typeof(key) === "object")) {
              _context10.next = 2;
              break;
            }

            return _context10.abrupt("return", storeFromObject(key));

          case 2:
            if (!(key === false)) {
              _context10.next = 4;
              break;
            }

            return _context10.abrupt("return", clearAll());

          case 4:
            if (!(typeof key === "undefined")) {
              _context10.next = 6;
              break;
            }

            return _context10.abrupt("return", getAll());

          case 6:
            if (!(typeof key !== "boolean" && typeof key !== "undefined" && typeof value === "undefined")) {
              _context10.next = 8;
              break;
            }

            return _context10.abrupt("return", getByKey(key));

          case 8:
            if (!(typeof key !== "boolean" && typeof value !== "undefined")) {
              _context10.next = 10;
              break;
            }

            return _context10.abrupt("return", storeByKey(key, value));

          case 10:
            return _context10.abrupt("return", Promise.resolve(undefined));

          case 11:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function store(_x9, _x10) {
    return _ref12.apply(this, arguments);
  };
}();

exports.store = store;
store.set = storeByKey;
store.setAll = storeFromObject;
store.get = getByKey;
store.getAll = getAll;
store.clear = clearAll;
store.remove = removeByKey;
store.has = hasKey;
store.size = size;
store.add = add;
var _default = store;
exports.default = _default;