import React from 'react'

// Import components
import {PatternLabComponent} from '@peteyg/patternlab-react-component'
import SGPatternHead from '../organisms/pattern/SGPatternHead'
import SGPatternExtra from '../organisms/pattern/SGPatternExtra'

// Declare this component
export default class SGPattern extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            extraActive: false
        }
    }

    _getPatternProps() {
        const pattern = this.props.pattern

        let patternProps = {
            extraToggleClass: this._getToggleExtraClass(),
            linkToComponent: '#', //TODO
            patternLabComponent: false,
            componentTitle: pattern.name
        }

        // if (!(pattern.prototype instanceof PatternLabComponent)) 
        if (!(pattern.__proto__.name === PatternLabComponent.name)) 
            return patternProps

        const componentInstance = new pattern()
        return {
            ...patternProps,
            patternLabComponent: true,
            componentTitle: pattern.getTitle(),
            componentDesc: pattern.getDescription(),
            annotations: pattern.getAnnotations(),
            markup: componentInstance.getHtml(),
            jsxMarkup: componentInstance.getJsx(),
            defaultProps: componentInstance.getDefProps(),
            propTypes: componentInstance.getPropTypes(),
            _toggleExtra: this._toggleExtra.bind(this)
        }
    }

    _toggleExtra(evt) {
        evt.preventDefault()
        this.setState({
            extraActive: !this.state.extraActive
        })
    }

    _getToggleExtraClass() {
        return this.state.extraActive ? " active" : ""
    }

    _setFakeProps(element) {
        // TODO: fix this (props readonly error)
        // const fakeProps = element.type.fakeProps
        // if (fakeProps)
        //     element.props = {
        //         ...element.props,
        //         ...fakeProps
        //     }
        return element
    }

    _getElement() {
        let element = React.createElement(this.props.pattern)
        return this._setFakeProps(element)
    }

    _getPatternId() {
        return this.props.componentKey.replace(new RegExp("/", "g"), "-").toLowerCase()
    }


    render() {
        const patternProps = this._getPatternProps()
        const patternId = this._getPatternId()

        // Return JSX
        return (
            <div id={patternId}>
                <div>
                    <div className="sg-pattern">
                        <SGPatternHead {...patternProps} />
                        <SGPatternExtra {...patternProps} /> 
                    </div>
                </div>
                <div className="sg-pattern-example">
                    {this._getElement()}
                </div>
            </div>
        )
    }
}