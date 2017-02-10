var fs = require('fs'),
    path = require('path'),
    patternLabConfig = require('./get-config')

var generateSourcemap = function() {
    
    this.config = patternLabConfig()
    if (!this.config.componentsRootPath) throw new Error("No root path has been set!")



    this._filenameShouldBeSkipped = function (filename) {
        const checkFilename = filename.toLowerCase()
        return (this.config.skipFiles.find(file => checkFilename.indexOf(file) >= 0)) != null
    }

    this._readComponents = function (dir, namespace, done) {
        let results = []
        let results2 = []

        fs.readdir(dir, (err, list) => {
            if (err) return done(err)

            list = list.filter(listItem => !this._filenameShouldBeSkipped(path.resolve(dir, listItem)))
            let listLength = list.length;
            if (!listLength) return done(null, results, {name: path.basename(dir), type: 'folder', children: results2})

            list.forEach(listItem => {
                    let listItemPath = path.resolve(dir, listItem)
                    fs.stat(listItemPath, function(err, stat) {
                        const componentPath = namespace.replace('/', '')
                        if (stat && stat.isDirectory()) {
                            this._readComponents(listItemPath, namespace+'/'+listItem, (err, res, res2) => {
                                results = results.concat(res)
                                results2.push({
                                    name: path.basename(listItem),
                                    type: 'folder',
                                    children: res2,
                                    path: componentPath + '/' + path.basename(listItem)
                                })
                                listLength--
                                if (!listLength) {
                                results2.push({
                                    type: 'file',
                                    name: 'VIEW ALL',
                                    path: componentPath + '/view-all'
                                })
                                return done(null, results, results2)
                            }
                            })
                        }
                        else
                        {
                            const componentName = listItem.replace('.jsx' ,'').replace('.js' ,'')
                            const noSlashNamespace = namespace.replace(new RegExp("/", "g"), '')
                            const componentNamepace = noSlashNamespace + componentName
                            const arrayKey = componentPath + '/' + componentName
                            results.push(
                                {
                                   importText: "import " + componentNamepace + " from '" + listItemPath + "'",
                                    // importText: "const " + componentNamepace + " = require('" + listItemPath + "')",
                                    arrayText: "'" + arrayKey + "' : " + componentNamepace
                                }
                            )
                            results2.push({
                                type: 'file',
                                name: path.basename(listItem).replace('.jsx', '').replace('.js' ,''),
                                path: arrayKey
                            })
                            listLength--
                            if (!listLength) {
                                results2.push({
                                    type: 'file',
                                    name: 'VIEW ALL',
                                    path: componentPath + '/view-all'
                                })
                                return done(null, results, results2)
                            }
                        }
                    }.bind(this))
                })
        })
    }

    
    console.log("Start generating react patternlab sourcemaps")

    this._readComponents(this.config.componentsRootPath, '', (err, result, result2) => {
        if(err) console.error(err)

        let importComponents = ''
        let componentList = '\nexport const componentList = {\n'
        result.forEach(res => {
            importComponents += res.importText + '\n'
            componentList += res.arrayText + ',\n'
        })
        componentList += '}'

        const jsonFileStruc = '\nexport const jsonFileStruc = ' + JSON.stringify(result2)

        const fullSavePath = this.config.saveSourcemapPath
        const fileContent = importComponents + componentList + jsonFileStruc
        fs.writeFile(fullSavePath, fileContent, function(err) {
            if(err) return console.log(err)
            console.log("Sourcemaps file saved: " + fullSavePath)
        })

        // conf
        if (this.config.createSourcemapConfig) {
            const smConf = 'module.exports = function() { return {\n' + 
                            'patternLabSourcemap: require("'+ this.config.loadSourcemapPath +'"),\n' + 
                            'defaultOrder: ' + JSON.stringify(this.config.defaultOrder) + '\n' + 
                            '}}'

            const confFullSavePath = this.config.sourcemapConfigPath
            fs.writeFile(confFullSavePath, smConf, function(err) {
                if(err) return console.log(err)
                console.log("Config file saved: " + confFullSavePath)
            })
        }
    })

}

module.exports = generateSourcemap
