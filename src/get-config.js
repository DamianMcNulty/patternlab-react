var projectRoot = '../../../../';
var getConfig = function() {
    try {
        var patternLabConfig = require(projectRoot + 'patternlab.conf.js')
        return {
            ...patternLabConfig(),
            sourcemapConfigPath: './patternlab-sm.conf.js'
        }
    } catch (error) {
        return {
            sourcemapConfigPath: './patternlab-sm.conf.js'
        }
    }
}
module.exports = getConfig