'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getConfig = function getConfig() {
    try {
        var patternLabConfig = require('../../../../patternlab.conf.js');
        return _extends({}, patternLabConfig(), {
            sourcemapConfigPath: './patternlab-sm.conf.js'
        });
    } catch (error) {
        return {
            sourcemapConfigPath: './patternlab-sm.conf.js'
        };
    }
};
module.exports = getConfig;