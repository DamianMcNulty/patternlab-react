'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _SGLayout = require('./templates/SGLayout');

var _SGLayout2 = _interopRequireDefault(_SGLayout);

var _SGIndex = require('./pages/SGIndex');

var _SGIndex2 = _interopRequireDefault(_SGIndex);

var _SGPatterns = require('./pages/SGPatterns');

var _SGPatterns2 = _interopRequireDefault(_SGPatterns);

var _SGNotFound = require('./pages/SGNotFound');

var _SGNotFound2 = _interopRequireDefault(_SGNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternLabRoutes = _react2.default.createElement(
  _reactRouter.Route,
  { path: 'style-guide', component: _SGLayout2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _SGIndex2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _SGPatterns2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'not-found', component: _SGNotFound2.default })
);

exports.default = PatternLabRoutes;