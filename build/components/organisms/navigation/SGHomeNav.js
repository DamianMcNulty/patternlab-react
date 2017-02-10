'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _SGTileList = require('../../molecules/global/SGTileList');

var _SGTileList2 = _interopRequireDefault(_SGTileList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import components


// Declare this component
var SGHomeNav = function (_React$Component) {
    _inherits(SGHomeNav, _React$Component);

    function SGHomeNav() {
        _classCallCheck(this, SGHomeNav);

        return _possibleConstructorReturn(this, (SGHomeNav.__proto__ || Object.getPrototypeOf(SGHomeNav)).apply(this, arguments));
    }

    _createClass(SGHomeNav, [{
        key: 'render',
        value: function render() {
            // Setup props
            var props = {
                tileList: [{
                    itemClass: "tile-center",
                    itemContent: _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/' },
                        'Homepage'
                    )
                }, {
                    itemClass: "tile-center tile--alt",
                    itemContent: _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/style-guide' },
                        'Style guide home'
                    )
                }]
            };

            // Return JSX
            return _react2.default.createElement(_SGTileList2.default, props);
        }
    }]);

    return SGHomeNav;
}(_react2.default.Component);

exports.default = SGHomeNav;