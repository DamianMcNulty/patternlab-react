'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _patternlabReactComponent = require('patternlab-react-component');

var _SGMenuItem = require('../../atoms/menu/SGMenuItem');

var _SGMenuItem2 = _interopRequireDefault(_SGMenuItem);

var _getSmConfig = require('../../../get-sm-config');

var _getSmConfig2 = _interopRequireDefault(_getSmConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import components
// import PatternLabComponent from '../../../../../component/dist/components/PatternLabComponent'


var config = (0, _getSmConfig2.default)();
var componentList = config.patternLabSourcemap.componentList;

// Declare this component

var SGMenu = function (_React$Component) {
    _inherits(SGMenu, _React$Component);

    function SGMenu() {
        _classCallCheck(this, SGMenu);

        return _possibleConstructorReturn(this, (SGMenu.__proto__ || Object.getPrototypeOf(SGMenu)).apply(this, arguments));
    }

    _createClass(SGMenu, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !this.props.menuLevel || this.props.activeClass != "" || this.props.activeClass != nextProps.activeClass;
        }

        // Return menu items on this level

    }, {
        key: '_getMenuItems',
        value: function _getMenuItems() {
            var _this2 = this;

            return this.props.menuItems.map(function (menuItem, index) {
                var props = _extends({}, menuItem, {
                    menuLevel: _this2.props.menuLevel,
                    _getActiveMenu: _this2.props._getActiveMenu,
                    _onClick: _this2.props._onClick
                });

                // Get display name
                if (menuItem.path) {
                    var component = componentList[menuItem.path];
                    // if (component && component.prototype instanceof PatternLabComponent) 
                    if (component && component.__proto__.name === _patternlabReactComponent.PatternLabComponent.name) props.name = component.getTitle();
                }

                return _react2.default.createElement(_SGMenuItem2.default, _extends({ key: index }, props));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var menuItems = this._getMenuItems();
            var menuClass = "sg-acc-panel  sg-sub-nav";
            switch (this.props.menuLevel) {
                case 0:
                    menuClass = "sg-nav";
                    break;
                case 1:
                    menuClass = "sg-acc-panel";
                    break;
            }
            menuClass += this.props.activeClass;

            // Return JSX
            return _react2.default.createElement(
                'ol',
                { className: menuClass },
                menuItems
            );
        }
    }]);

    return SGMenu;
}(_react2.default.Component);

// Default props


SGMenu.defaultProps = {
    activeClass: "",
    menuLevel: 0
};

// Setup propTypes
SGMenu.propTypes = {
    activeClass: _react2.default.PropTypes.string.isRequired,
    menuLevel: _react2.default.PropTypes.number.isRequired,
    menuItems: _react2.default.PropTypes.array.isRequired,
    _getActiveMenu: _react2.default.PropTypes.func.isRequired,
    _onClick: _react2.default.PropTypes.func.isRequired
};

exports.default = SGMenu;