'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _getSmConfig = require('../../get-sm-config');

var _getSmConfig2 = _interopRequireDefault(_getSmConfig);

var _SGPattern = require('../templates/SGPattern');

var _SGPattern2 = _interopRequireDefault(_SGPattern);

var _SGNotFound = require('../pages/SGNotFound');

var _SGNotFound2 = _interopRequireDefault(_SGNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = (0, _getSmConfig2.default)();
var componentList = config.patternLabSourcemap.componentList;

// Import components

// Declare this component
var SGPatterns = function (_React$Component) {
    _inherits(SGPatterns, _React$Component);

    function SGPatterns(props) {
        _classCallCheck(this, SGPatterns);

        var _this = _possibleConstructorReturn(this, (SGPatterns.__proto__ || Object.getPrototypeOf(SGPatterns)).call(this, props));

        _this.state = {
            displayTitle: null
        };
        return _this;
    }

    _createClass(SGPatterns, [{
        key: '_getPatternDisplay',
        value: function _getPatternDisplay(splat) {
            var componentKeys = [];
            // Check for view all..
            // TODO: view all as constant
            if (splat.endsWith('view-all')) {
                (function () {
                    var filterKey = splat.replace('/view-all', '');
                    Object.keys(componentList).forEach(function (componentKey) {
                        if (componentKey.indexOf(filterKey) >= 0) {
                            componentKeys.push(componentKey);
                        }
                    });
                })();
            } else {
                var componentKey = splat;
                if (componentList[componentKey]) componentKeys.push(componentKey);
            }

            // Return all patterns
            return componentKeys.map(function (componentKey, index) {
                var pattern = componentList[componentKey];

                // Does this pattern exists?
                if (typeof pattern !== 'function') return _react2.default.createElement(_SGNotFound2.default, { key: index });

                var props = {
                    key: index,
                    pattern: pattern,
                    componentKey: componentKey
                };
                return _react2.default.createElement(_SGPattern2.default, props);
            });
        }
    }, {
        key: '_getDisplayTitle',
        value: function _getDisplayTitle(splat) {
            if (!this._isSplatViewAll(splat)) return;

            var displayTitle = splat.replace('/view-all', '');
            var trimPoint = displayTitle.indexOf('/', -1);
            if (trimPoint) displayTitle = displayTitle.substr(trimPoint + 1);
            return _react2.default.createElement(
                'h2',
                { className: 'sg-pattern-category-title' },
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '#', className: 'patternLink' },
                    displayTitle
                )
            );
        }
    }, {
        key: '_isSplatViewAll',
        value: function _isSplatViewAll(splat) {
            return splat && splat.endsWith('view-all');
        }
    }, {
        key: 'render',
        value: function render() {
            var splat = this.props.params.splat;
            var patternDisplay = this._getPatternDisplay(splat);
            var displayTitle = this._getDisplayTitle(splat);
            // Return JSX
            return _react2.default.createElement(
                'div',
                { id: 'sg-patterns', className: 'sg-pattern-category' },
                displayTitle,
                patternDisplay
            );
        }
    }]);

    return SGPatterns;
}(_react2.default.Component);

exports.default = SGPatterns;