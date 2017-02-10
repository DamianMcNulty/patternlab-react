'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _SGMenu = require('../../molecules/menu/SGMenu');

var _SGMenu2 = _interopRequireDefault(_SGMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import components


// Declare this component
var SGMenuItem = function (_React$Component) {
    _inherits(SGMenuItem, _React$Component);

    function SGMenuItem(props) {
        _classCallCheck(this, SGMenuItem);

        return _possibleConstructorReturn(this, (SGMenuItem.__proto__ || Object.getPrototypeOf(SGMenuItem)).call(this, props));
    }

    _createClass(SGMenuItem, [{
        key: '_getMenuItemKey',
        value: function _getMenuItemKey() {
            return this.props.path ? this.props.path : this.props.name;
        }
    }, {
        key: '_isFile',
        value: function _isFile() {
            // TODO: move to state?
            return this.props.type == 'file';
        }
    }, {
        key: '_getActiveClass',
        value: function _getActiveClass() {
            var menuItemKey = this._getMenuItemKey();
            return this.props._getActiveMenu(menuItemKey) ? " active" : "";
        }
    }, {
        key: '_getItemLink',
        value: function _getItemLink() {
            var onClickLink = this.props._onClick.bind(this, 0, null);
            var onClickSubmenu = this.props._onClick.bind(this, this.props.menuLevel, this._getMenuItemKey());
            if (this._isFile()) return _react2.default.createElement(
                _reactRouter.Link,
                { to: this._getPath(), onClick: onClickLink },
                this.props.name
            );

            var linkClassName = "sg-acc-handle" + this._getActiveClass();
            return _react2.default.createElement(
                'a',
                { href: '#', className: linkClassName, onClick: onClickSubmenu },
                this.props.name
            );
        }
    }, {
        key: '_getSubMenu',
        value: function _getSubMenu() {
            if (this._isFile()) return;

            var props = {
                activeClass: this._getActiveClass(),
                menuItems: this.props.children,
                _onClick: this.props._onClick,
                _getActiveMenu: this.props._getActiveMenu,
                menuLevel: this.props.menuLevel + 1
            };
            return _react2.default.createElement(_SGMenu2.default, props);
        }
    }, {
        key: '_getPath',
        value: function _getPath() {
            return '/style-guide/' + this.props.path;
        }
    }, {
        key: 'render',
        value: function render() {
            var itemLink = this._getItemLink();
            var subMenu = this._getSubMenu();
            var linkPath = this._getPath();

            // Return JSX
            return _react2.default.createElement(
                'li',
                null,
                itemLink,
                subMenu
            );
        }
    }]);

    return SGMenuItem;
}(_react2.default.Component);

// Setup propTypes


SGMenuItem.propTypes = {
    menuLevel: _react2.default.PropTypes.number.isRequired,
    type: _react2.default.PropTypes.string.isRequired,
    name: _react2.default.PropTypes.string.isRequired,
    _getActiveMenu: _react2.default.PropTypes.func.isRequired,
    _onClick: _react2.default.PropTypes.func.isRequired
};

exports.default = SGMenuItem;