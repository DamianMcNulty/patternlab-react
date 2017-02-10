'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _patternlabReactComponent = require('patternlab-react-component');

var _SGPatternHead = require('../organisms/pattern/SGPatternHead');

var _SGPatternHead2 = _interopRequireDefault(_SGPatternHead);

var _SGPatternExtra = require('../organisms/pattern/SGPatternExtra');

var _SGPatternExtra2 = _interopRequireDefault(_SGPatternExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import components


// Declare this component
var SGPattern = function (_React$Component) {
    _inherits(SGPattern, _React$Component);

    function SGPattern(props) {
        _classCallCheck(this, SGPattern);

        var _this = _possibleConstructorReturn(this, (SGPattern.__proto__ || Object.getPrototypeOf(SGPattern)).call(this, props));

        _this.state = {
            extraActive: false
        };
        return _this;
    }

    _createClass(SGPattern, [{
        key: '_getPatternProps',
        value: function _getPatternProps() {
            var pattern = this.props.pattern;

            var patternProps = {
                extraToggleClass: this._getToggleExtraClass(),
                linkToComponent: '#', //TODO
                patternLabComponent: false,
                componentTitle: pattern.name
            };

            // if (!(pattern.prototype instanceof PatternLabComponent)) 
            if (!(pattern.__proto__.name === _patternlabReactComponent.PatternLabComponent.name)) return patternProps;

            var componentInstance = new pattern();
            return _extends({}, patternProps, {
                patternLabComponent: true,
                componentTitle: pattern.getTitle(),
                componentDesc: pattern.getDescription(),
                annotations: pattern.getAnnotations(),
                markup: componentInstance.getHtml(),
                jsxMarkup: componentInstance.getJsx(),
                defaultProps: componentInstance.getDefProps(),
                propTypes: componentInstance.getPropTypes(),
                _toggleExtra: this._toggleExtra.bind(this)
            });
        }
    }, {
        key: '_toggleExtra',
        value: function _toggleExtra(evt) {
            evt.preventDefault();
            this.setState({
                extraActive: !this.state.extraActive
            });
        }
    }, {
        key: '_getToggleExtraClass',
        value: function _getToggleExtraClass() {
            return this.state.extraActive ? " active" : "";
        }
    }, {
        key: '_setFakeProps',
        value: function _setFakeProps(element) {
            var fakeProps = element.type.fakeProps;
            if (fakeProps) element.props = _extends({}, element.props, fakeProps);
            return element;
        }
    }, {
        key: '_getElement',
        value: function _getElement() {
            var element = _react2.default.createElement(this.props.pattern);
            return this._setFakeProps(element);
        }
    }, {
        key: '_getPatternId',
        value: function _getPatternId() {
            return this.props.componentKey.replace(new RegExp("/", "g"), "-").toLowerCase();
        }
    }, {
        key: 'render',
        value: function render() {
            var patternProps = this._getPatternProps();
            var patternId = this._getPatternId();

            // Return JSX
            return _react2.default.createElement(
                'div',
                { id: patternId },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'sg-pattern' },
                        _react2.default.createElement(_SGPatternHead2.default, patternProps),
                        _react2.default.createElement(_SGPatternExtra2.default, patternProps)
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'sg-pattern-example' },
                    this._getElement()
                )
            );
        }
    }]);

    return SGPattern;
}(_react2.default.Component);

exports.default = SGPattern;