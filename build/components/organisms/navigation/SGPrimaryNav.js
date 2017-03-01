'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getSmConfig = require('../../../get-sm-config');

var _getSmConfig2 = _interopRequireDefault(_getSmConfig);

var _SGMenu = require('../../molecules/menu/SGMenu');

var _SGMenu2 = _interopRequireDefault(_SGMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Get menu items from generated file


var config = (0, _getSmConfig2.default)();
var jsonFileStruc = config.patternLabSourcemap.jsonFileStruc;

// Import components

// Declare this component
var SGPrimaryNav = function (_React$Component) {
    _inherits(SGPrimaryNav, _React$Component);

    function SGPrimaryNav(props) {
        _classCallCheck(this, SGPrimaryNav);

        var _this = _possibleConstructorReturn(this, (SGPrimaryNav.__proto__ || Object.getPrototypeOf(SGPrimaryNav)).call(this, props));

        _this.state = {
            rootMenuActive: false,
            activeMenus: []
        };
        return _this;
    }

    // Return array of all menu items


    _createClass(SGPrimaryNav, [{
        key: '_getRootMenuItems',
        value: function _getRootMenuItems() {
            var menuItems = [];
            jsonFileStruc.filter(function (item) {
                var order = config.defaultOrder.indexOf(item.name);
                if (order >= 0) {
                    menuItems[order] = item;
                    return false;
                }
                return true;
            }).forEach(function (item) {
                menuItems.push(item);
            });

            return menuItems;
        }

        // Update activeMenus (NB. no menuItemKey signifies a reset, ie. click link)

    }, {
        key: '_onClick',
        value: function _onClick(menuLevel, menuItemKey, evt) {
            // Get root menu active
            var rootMenuActive = menuItemKey ? this.state.rootMenuActive : false;

            // If level 0 start a fresh list
            var activeMenus = menuLevel ? this.state.activeMenus : [];

            // If submenu link
            if (menuItemKey) {
                evt.preventDefault();
                var thisMenuActive = this.state.activeMenus[menuItemKey];
                activeMenus[menuItemKey] = !thisMenuActive;
            }

            this.setState({
                rootMenuActive: rootMenuActive,
                activeMenus: activeMenus
            });
        }

        // Return if menu is active

    }, {
        key: '_getActiveMenu',
        value: function _getActiveMenu(menuItemKey) {
            return this.state.activeMenus[menuItemKey];
        }

        // Toggle root menu (small device view)

    }, {
        key: '_toggleRootMenu',
        value: function _toggleRootMenu(evt) {
            evt.preventDefault();
            this.setState(_extends({}, this.state, {
                rootMenuActive: !this.state.rootMenuActive
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            // Setup props
            var props = {
                menuItems: this._getRootMenuItems(),
                _getActiveMenu: this._getActiveMenu.bind(this),
                _onClick: this._onClick.bind(this)
            };

            var containerClass = "sg-nav-container";
            if (this.state.rootMenuActive) containerClass += " active";

            // Return JSX
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'a',
                    { href: '#', className: 'sg-nav-toggle', onClick: this._toggleRootMenu.bind(this) },
                    'Menu'
                ),
                _react2.default.createElement(
                    'div',
                    { className: containerClass },
                    _react2.default.createElement(_SGMenu2.default, props)
                )
            );
        }
    }]);

    return SGPrimaryNav;
}(_react2.default.Component);

exports.default = SGPrimaryNav;