"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postReg = exports.getLogin = void 0;

var _axios = _interopRequireDefault(require("../plugins/axios"));

var _Qs = _interopRequireDefault(require("Qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//登录
// export const getLogin = async ({
//     username,
//     password
//   }) =>
//   axios.get("/login?apipost_id=e2c35b", {
//     params: {
//       username,
//       password
//     }
//   });
var getLogin = function getLogin(_ref) {
  var username, password, data;
  return regeneratorRuntime.async(function getLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = _ref.username, password = _ref.password;
          data = {
            username: 'admin',
            password: 'admin'
          };
          (0, _axios["default"])({
            method: 'POST',
            headers: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: _Qs["default"].stringify(data),
            url: '/login'
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}; //注册


exports.getLogin = getLogin;

var postReg = function postReg(_ref2) {
  var username, password;
  return regeneratorRuntime.async(function postReg$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          username = _ref2.username, password = _ref2.password;
          return _context2.abrupt("return", _axios["default"].post('/register', {
            username: username,
            password: password
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //自动登录


exports.postReg = postReg;