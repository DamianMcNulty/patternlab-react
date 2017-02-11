'use strict';

var getSourcemapConfig = function getSourcemapConfig() {
    try {
        var sourcemapConfig = require('../../../patternlab-sm.conf.js');
        return sourcemapConfig();
    } catch (error) {
        return {};
    }
};
module.exports = getSourcemapConfig;