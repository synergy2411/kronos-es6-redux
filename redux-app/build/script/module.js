"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MAGIC_NUMBER = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ES5 Module Export
// module.exports = {}
// ES6 Module export
//named export
var MAGIC_NUMBER = Math.round(Math.random() * 100);
exports.MAGIC_NUMBER = MAGIC_NUMBER;

var Student = function Student() {
  _classCallCheck(this, Student);
}; // Default export


var _default = Student;
exports["default"] = _default;