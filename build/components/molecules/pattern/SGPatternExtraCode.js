'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPrism = require('react-prism');

var _jsBeautify = require('js-beautify');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// beautify = require('js-beautify').js_beautify,

// Import components
// import SGTileList from '../molecules/SGTileList'

// TODO move to constants
var tabNames = {
    jsx: 'jsx',
    html: 'html',
    defaultProps: 'defaultProps',
    propTypes: 'propTypes'
};

// Declare this component

var SGPatternExtraCode = function (_React$Component) {
    _inherits(SGPatternExtraCode, _React$Component);

    function SGPatternExtraCode(props) {
        _classCallCheck(this, SGPatternExtraCode);

        var _this = _possibleConstructorReturn(this, (SGPatternExtraCode.__proto__ || Object.getPrototypeOf(SGPatternExtraCode)).call(this, props));

        _this.state = {
            tabActive: tabNames.jsx
        };
        return _this;
    }

    _createClass(SGPatternExtraCode, [{
        key: '_onToggleTab',
        value: function _onToggleTab(tab, evt) {
            evt.preventDefault();
            this.setState({
                tabActive: tab
            });
        }
    }, {
        key: '_getTabStyle',
        value: function _getTabStyle(tab) {
            return {
                display: this.state.tabActive === tab ? 'block' : 'none'
            };
        }
    }, {
        key: '_getTabLiClass',
        value: function _getTabLiClass(tab) {
            return this.state.tabActive === tab ? "sg-tab-title-active" : "";
        }
    }, {
        key: '_getTabLinkClass',
        value: function _getTabLinkClass(tab) {
            return this.state.tabActive === tab ? "active" : "";
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'sg-pattern-extra-code' },
                _react2.default.createElement(
                    'div',
                    { className: 'sg-tabs' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'sg-tabs-list' },
                        _react2.default.createElement(
                            'li',
                            { className: this._getTabLiClass(tabNames.jsx) },
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: this._getTabLinkClass(tabNames.jsx), onClick: this._onToggleTab.bind(this, tabNames.jsx) },
                                'JSX'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: this._getTabLiClass(tabNames.html) },
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: this._getTabLinkClass(tabNames.html), onClick: this._onToggleTab.bind(this, tabNames.html) },
                                'HTML'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: this._getTabLiClass(tabNames.defaultProps) },
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: this._getTabLinkClass(tabNames.defaultProps), onClick: this._onToggleTab.bind(this, tabNames.defaultProps) },
                                'Default Props'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: this._getTabLiClass(tabNames.propTypes) },
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: this._getTabLinkClass(tabNames.propTypes), onClick: this._onToggleTab.bind(this, tabNames.propTypes) },
                                'Prop Types'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sg-tabs-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'sg-tabs-panel', style: this._getTabStyle(tabNames.jsx) },
                            _react2.default.createElement(
                                'pre',
                                null,
                                _react2.default.createElement(
                                    _reactPrism.PrismCode,
                                    { className: 'language-markup' },
                                    this.props.jsxMarkup
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'sg-tabs-panel', style: this._getTabStyle(tabNames.html) },
                            _react2.default.createElement(
                                'pre',
                                null,
                                _react2.default.createElement(
                                    _reactPrism.PrismCode,
                                    { className: 'language-markup' },
                                    (0, _jsBeautify.html)(this.props.markup)
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'sg-tabs-panel', style: this._getTabStyle(tabNames.defaultProps) },
                            _react2.default.createElement(
                                'pre',
                                null,
                                _react2.default.createElement(
                                    _reactPrism.PrismCode,
                                    { className: 'language-javascript' },
                                    JSON.stringify(this.props.defaultProps, null, 4)
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'sg-tabs-panel', style: this._getTabStyle(tabNames.propTypes) },
                            _react2.default.createElement(
                                'pre',
                                null,
                                _react2.default.createElement(
                                    _reactPrism.PrismCode,
                                    { className: 'language-javascript' },
                                    JSON.stringify(this.props.propTypes, null, 4)
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SGPatternExtraCode;
}(_react2.default.Component);

exports.default = SGPatternExtraCode;