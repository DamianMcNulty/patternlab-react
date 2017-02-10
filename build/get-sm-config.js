'use strict';

var sourcemapConfig = require('../../../patternlab-sm.conf.js');

var getSourcemapConfig = function getSourcemapConfig() {
    return sourcemapConfig();
};

module.exports = getSourcemapConfig;