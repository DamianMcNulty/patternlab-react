'use strict';

var _PatternLabRoutes = require('./components/PatternLabRoutes');

var _PatternLabRoutes2 = _interopRequireDefault(_PatternLabRoutes);

var _generateSourcemap = require('./generate-sourcemap');

var _generateSourcemap2 = _interopRequireDefault(_generateSourcemap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    generateSourcemap: _generateSourcemap2.default,
    PatternLabRoutes: _PatternLabRoutes2.default
};