"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Declare this component
var SGTileListItem = function (_React$Component) {
    _inherits(SGTileListItem, _React$Component);

    function SGTileListItem() {
        _classCallCheck(this, SGTileListItem);

        return _possibleConstructorReturn(this, (SGTileListItem.__proto__ || Object.getPrototypeOf(SGTileListItem)).apply(this, arguments));
    }

    _createClass(SGTileListItem, [{
        key: "render",
        value: function render() {
            // Setup props
            var itemClass = "gi tile";
            if (this.props.itemClass) itemClass += " " + this.props.itemClass;

            // Return JSX
            return _react2.default.createElement(
                "li",
                { className: itemClass },
                this.props.itemContent
            );
        }
    }]);

    return SGTileListItem;
}(_react2.default.Component);
// SGTileListItem.defaultProps = {
//     itemClass: ""
// }

// Setup propTypes


SGTileListItem.propTypes = {
    itemContent: _react2.default.PropTypes.object.isRequired
};

exports.default = SGTileListItem;