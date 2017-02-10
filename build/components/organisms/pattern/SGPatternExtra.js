'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SGPatternExtraInfo = require('../../molecules/pattern/SGPatternExtraInfo');

var _SGPatternExtraInfo2 = _interopRequireDefault(_SGPatternExtraInfo);

var _SGPatternExtraCode = require('../../molecules/pattern/SGPatternExtraCode');

var _SGPatternExtraCode2 = _interopRequireDefault(_SGPatternExtraCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import components


// Declare this component
var SGPatternExtra = function (_React$Component) {
    _inherits(SGPatternExtra, _React$Component);

    function SGPatternExtra() {
        _classCallCheck(this, SGPatternExtra);

        return _possibleConstructorReturn(this, (SGPatternExtra.__proto__ || Object.getPrototypeOf(SGPatternExtra)).apply(this, arguments));
    }

    _createClass(SGPatternExtra, [{
        key: 'render',
        value: function render() {
            if (!this.props.patternLabComponent) return null;
            var extraClass = "sg-pattern-extra" + this.props.extraToggleClass;

            // Return JSX
            return _react2.default.createElement(
                'div',
                { className: extraClass },
                _react2.default.createElement(
                    'div',
                    { className: 'sg-modal-content-inner' },
                    _react2.default.createElement(
                        'div',
                        { className: 'sg-pattern-extra-inner' },
                        _react2.default.createElement(_SGPatternExtraInfo2.default, this.props),
                        _react2.default.createElement(_SGPatternExtraCode2.default, this.props)
                    )
                )
            );
        }
    }]);

    return SGPatternExtra;
}(_react2.default.Component);

exports.default = SGPatternExtra;