**Under development**
# patternlab-react

> Build React style guide for your React site components

**Please note, there is an official react patternengine for patternlab-node here: [patternengine-node-react](https://github.com/pattern-lab/patternengine-node-react)**


A variation on [Pattern Lab](http://patternlab.io/) which is an awesome tool for 
building style guides based on the [Atomic design](http://atomicdesign.bradfrost.com/) system.

This module auto-generates a React style guide for your React project.

## Demo

For an example of how to implement this module, check out 
[patternlab-react-demo](https://github.com/peteyg99/patternlab-react-demo).



## Usage

### Install

```
npm install patternlab-react
```

### Add patternlab-react routes to your project

Add the */style-guide* routes to your router.

```
import React from 'react';
import { Route } from 'react-router';

import { PatternLabRoutes } from '@peteyg/patternlab-react';

export default Routes = (
    <Route path="/">  
        {PatternLabRoutes}
        ...
    </Route>
)
```

### patternlab-react-component

Extend your react component to add a description etc.

See [patternlab-react-component](https://github.com/peteyg99/patternlab-react-component) 
for more details.

```
import React from 'react';
import { PatternLabComponent } from '@peteyg/patternlab-react-component';

class MyComponent extends PatternLabComponent {
    static getTitle() {
        return "Foo";
    }
    static getDescription() {
        return "Bar";
    }
    render() {
        return (
            ...
        )
    }
}

export default class MyComponent;
```



## Build process

### Configuration file

Create a setup file in the root of your project: **patternlab.conf.js**

*See below for Configuration options*

```
module.exports = function() {
    return {
        componentsRootPath: './build/app/components',
        saveSourcemapPath: './build/app/patternlab-sourcemap.js',
        skipFiles: [
            '.ds_store',
            '/_',
            '/layouts'
        ],
        defaultOrder: [
            'atoms',
            'molecules',
            'organisms',
            'templates',
            'pages'
        ]
    }
}
```

### Build components

If you are using ES6 then you will need to create a build version of your 
components before you generate the 'component sourcemap', eg:

```
babel src --presets=babel-preset-es2015,react --out-dir=build
```

### Generate 'component sourcemap'

The next step in the build process is to generate a sourcemap for patternlab 
to read, eg:

```
var patternlab = require('@peteyg/patternlab-react');
patternlab.generateSourcemap();
```
or:
```
node -e 'require("@peteyg/patternlab-react").generateSourcemap()'
```

## Configuration options
#### componentsRootPath
The root path of your *compiled* components (ie. not ES6).
#### saveSourcemapPath
The location to save your generated 'component sourcemap'.
#### skipFiles
Wildcards for files and directories that should be ignored when generating 
the 'component sourcemap'.
#### defaultOrder
The order for the root folders to be organised by in the style guide menu.