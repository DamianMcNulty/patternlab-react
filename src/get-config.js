var patternLabConfig = require('../../../patternlab.conf.js')

var getConfig = function() {
    return {
        ...patternLabConfig(),
        sourcemapConfigPath: './patternlab-sm.conf.js'
    }
}

module.exports = getConfig