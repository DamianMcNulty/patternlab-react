var getSourcemapConfig = function() {
    try {
        var sourcemapConfig = require('../../../patternlab-sm.conf.js');
        return sourcemapConfig();    
    } catch (error) {
        return {}
    }
}
module.exports = getSourcemapConfig