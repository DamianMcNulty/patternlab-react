'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Declare this component
var SGPatternHead = function (_React$Component) {
    _inherits(SGPatternHead, _React$Component);

    function SGPatternHead() {
        _classCallCheck(this, SGPatternHead);

        return _possibleConstructorReturn(this, (SGPatternHead.__proto__ || Object.getPrototypeOf(SGPatternHead)).apply(this, arguments));
    }

    _createClass(SGPatternHead, [{
        key: '_getExtraToggle',


        // TODO: move to component
        value: function _getExtraToggle() {
            if (!this.props.patternLabComponent) return;

            var toggleClass = "sg-pattern-extra-toggle" + this.props.extraToggleClass;
            return _react2.default.createElement(
                'a',
                { href: '#', title: 'View Pattern Info', className: toggleClass, onClick: this.props._toggleExtra },
                _react2.default.createElement(
                    'span',
                    null,
                    '\u25BC'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            // Return JSX
            return _react2.default.createElement(
                'div',
                { className: 'sg-pattern-head' },
                _react2.default.createElement(
                    'h3',
                    { className: 'sg-pattern-title' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: this.props.componentKey, className: 'patternLink', title: 'Link to Pattern' },
                        this.props.componentTitle
                    )
                ),
                this._getExtraToggle()
            );
        }
    }]);

    return SGPatternHead;
}(_react2.default.Component);

// Default props


SGPatternHead.defaultProps = {
    patternLabComponent: false,
    extraToggleClass: ""
};

// Setup propTypes
SGPatternHead.propTypes = {
    patternLabComponent: _react2.default.PropTypes.bool.isRequired,
    extraToggleClass: _react2.default.PropTypes.string.isRequired,
    componentKey: _react2.default.PropTypes.string.isRequired,
    componentTitle: _react2.default.PropTypes.string.isRequired,
    _toggleExtra: _react2.default.PropTypes.func
};

exports.default = SGPatternHead;