'use strict';

var projectRoot = '../../../../';
var getSourcemapConfig = function getSourcemapConfig() {
    try {
        var sourcemapConfig = require(projectRoot + 'patternlab-sm.conf.js');
        return sourcemapConfig();
    } catch (error) {
        return {
            patternLabSourcemap: {
                jsonFileStruc: [],
                componentList: []
            },
            defaultOrder: []
        };
    }
};
module.exports = getSourcemapConfig;