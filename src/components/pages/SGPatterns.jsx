import React from 'react'

import { Link } from 'react-router'

import patternLabConfig from '../../get-sm-config'
const config = patternLabConfig()
const {componentList} = config.patternLabSourcemap

// Import components
import SGPattern from '../templates/SGPattern'
import SGNotFound from '../pages/SGNotFound'

// Declare this component
export default class SGPatterns extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayTitle: null
        }
    }

    _getPatternDisplay(splat) {
        const componentKeys = []
        // Check for view all..
        // TODO: view all as constant
        if (splat.endsWith('view-all')) {
            const filterKey = splat.replace('/view-all', '')
            Object.keys(componentList).forEach(componentKey => {
                if (componentKey.indexOf(filterKey) >= 0) {
                    componentKeys.push(componentKey)
                }
            })
        } else {
            const componentKey = splat
            if (componentList[componentKey]) 
                componentKeys.push(componentKey)
        }

        // Return all patterns
        return componentKeys.map((componentKey, index) => {
            const pattern = componentList[componentKey]

            // Does this pattern exists?
            if (typeof(pattern) !== 'function')
                return <SGNotFound key={index} />

            const props = {
                key: index,
                pattern,
                componentKey
            }
            return <SGPattern {...props} />
        })
    }

    _getDisplayTitle(splat) {
        if (!this._isSplatViewAll(splat)) return

        let displayTitle = splat.replace('/view-all', '')
        const trimPoint = displayTitle.indexOf('/', -1)
        if (trimPoint) displayTitle = displayTitle.substr(trimPoint + 1)
        return (
            <h2 className="sg-pattern-category-title">
                <Link to="#" className="patternLink">
                    {displayTitle}
                </Link>
            </h2>
        )
    }

    _isSplatViewAll(splat) {
        return splat && splat.endsWith('view-all')
    }


    render() {
        const splat = this.props.params.splat
        const patternDisplay = this._getPatternDisplay(splat)
        const displayTitle = this._getDisplayTitle(splat)
        // Return JSX
        return (
            <div id="sg-patterns" className="sg-pattern-category">
                {displayTitle}
                {patternDisplay}
            </div>
        )
    }
}