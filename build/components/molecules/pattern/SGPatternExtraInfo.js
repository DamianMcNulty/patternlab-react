'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SGAnnotation = require('../../atoms/pattern/SGAnnotation');

var _SGAnnotation2 = _interopRequireDefault(_SGAnnotation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import components


// Declare this component
var SGPatternExtraInfo = function (_React$Component) {
    _inherits(SGPatternExtraInfo, _React$Component);

    function SGPatternExtraInfo() {
        _classCallCheck(this, SGPatternExtraInfo);

        return _possibleConstructorReturn(this, (SGPatternExtraInfo.__proto__ || Object.getPrototypeOf(SGPatternExtraInfo)).apply(this, arguments));
    }

    _createClass(SGPatternExtraInfo, [{
        key: '_getAnnotations',
        value: function _getAnnotations() {
            if (!this.props.annotations) return;

            return _react2.default.createElement(
                'div',
                { className: 'sg-annotations' },
                _react2.default.createElement(
                    'h2',
                    { className: 'sg-annotations-title' },
                    'Annotations'
                ),
                _react2.default.createElement(
                    'ol',
                    { className: 'sg-annotations-list' },
                    this._mapAnnotations(this.props.annotations)
                )
            );
        }
    }, {
        key: '_mapAnnotations',
        value: function _mapAnnotations(annotations) {
            return annotations.map(function (annotation, index) {
                return _react2.default.createElement(_SGAnnotation2.default, _extends({ key: index }, annotation));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'sg-pattern-extra-info' },
                _react2.default.createElement(
                    'div',
                    { className: 'sg-pattern-desc' },
                    _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: this.props.componentDesc } })
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'sg-pattern-lineage' },
                    'Lineage: TODO'
                ),
                this._getAnnotations()
            );
        }
    }]);

    return SGPatternExtraInfo;
}(_react2.default.Component);

exports.default = SGPatternExtraInfo;