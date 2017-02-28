'use strict';

var fs = require('fs'),
    path = require('path'),
    patternLabConfig = require('./get-config');

var generateSourcemap = function generateSourcemap() {
    var _this2 = this;

    this.config = patternLabConfig();
    if (!this.config.componentsRootPath) throw new Error("No root path has been set!");

    this._filenameShouldBeSkipped = function (filename) {
        var checkFilename = filename.toLowerCase();
        return this.config.skipFiles.find(function (file) {
            return checkFilename.indexOf(file) >= 0;
        }) != null;
    };

    this._readComponents = function (dir, namespace, done) {
        var _this = this;

        var results = [];
        var results2 = [];

        fs.readdir(dir, function (err, list) {
            if (err) return done(err);

            list = list.filter(function (listItem) {
                return !_this._filenameShouldBeSkipped(path.resolve(dir, listItem));
            });
            var listLength = list.length;
            if (!listLength) return done(null, results, { name: path.basename(dir), type: 'folder', children: results2 });

            list.forEach(function (listItem) {
                var listItemPath = path.resolve(dir, listItem);
                fs.stat(listItemPath, function (err, stat) {
                    var componentPath = namespace.replace('/', '');
                    if (stat && stat.isDirectory()) {
                        this._readComponents(listItemPath, namespace + '/' + listItem, function (err, res, res2) {
                            results = results.concat(res);
                            results2.push({
                                name: path.basename(listItem),
                                type: 'folder',
                                children: res2,
                                path: componentPath + '/' + path.basename(listItem)
                            });
                            listLength--;
                            if (!listLength) {
                                results2.push({
                                    type: 'file',
                                    name: 'VIEW ALL',
                                    path: componentPath + '/view-all'
                                });
                                return done(null, results, results2);
                            }
                        });
                    } else {
                        var componentName = listItem.replace('.jsx', '').replace('.js', '');
                        var noSlashNamespace = namespace.replace(new RegExp("/", "g"), '');
                        var componentNamepace = noSlashNamespace + componentName;
                        var arrayKey = componentPath + '/' + componentName;
                        results.push({
                            //    importText: "import " + componentNamepace + " from '" + listItemPath + "'",
                            importText: "var " + componentNamepace + " = require('" + listItemPath + "')",
                            arrayText: "'" + arrayKey + "' : " + componentNamepace + ".default"
                        });
                        results2.push({
                            type: 'file',
                            name: path.basename(listItem).replace('.jsx', '').replace('.js', ''),
                            path: arrayKey
                        });
                        listLength--;
                        if (!listLength) {
                            results2.push({
                                type: 'file',
                                name: 'VIEW ALL',
                                path: componentPath + '/view-all'
                            });
                            return done(null, results, results2);
                        }
                    }
                }.bind(_this));
            });
        });
    };

    console.log("Start generating react patternlab sourcemaps");

    this._readComponents(this.config.componentsRootPath, '', function (err, result, result2) {
        if (err) console.error(err);

        var importComponents = '';
        // let componentList = '\nexport const componentList = {\n'
        var componentList = '\nexports.componentList = {\n';
        result.forEach(function (res) {
            importComponents += res.importText + '\n';
            componentList += res.arrayText + ',\n';
        });
        componentList += '}';

        var jsonFileStruc = '\nexports.jsonFileStruc = ' + JSON.stringify(result2);

        var fullSavePath = _this2.config.saveSourcemapPath;
        var fileContent = importComponents + componentList + jsonFileStruc;
        fs.writeFile(fullSavePath, fileContent, function (err) {
            if (err) return console.log(err);
            console.log("Sourcemaps file saved: " + fullSavePath);
        });

        // conf
        var confFullSavePath = _this2.config.sourcemapConfigPath;
        //if (!fs.existsSync(confFullSavePath)) {
        var smConf = 'module.exports = function() { return {\n' + 'patternLabSourcemap: require("' + _this2.config.saveSourcemapPath + '"),\n' + 'defaultOrder: ' + JSON.stringify(_this2.config.defaultOrder) + '\n' + '}}';

        fs.writeFile(confFullSavePath, smConf, function (err) {
            if (err) return console.log(err);
            console.log("Config file saved: " + confFullSavePath);
        });
        //}
    });
};

module.exports = generateSourcemap;