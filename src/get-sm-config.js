var getSourcemapConfig = function() {
    try {
        var sourcemapConfig = require('../../../../patternlab-sm.conf.js');
        return sourcemapConfig();    
    } catch (error) {
        return {
            patternLabSourcemap: {
                jsonFileStruc: [],
                componentList: []
            },
            defaultOrder: []
        }
    }
}
module.exports = getSourcemapConfig