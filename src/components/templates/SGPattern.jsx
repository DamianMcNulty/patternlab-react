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
            extraActive: false,
            patternProps: {}
        }
    }

    componentWillMount() {
        this._updateComponentState(this.props)
    }

    _updateComponentState(props) {
        this.setState({
            ...this.state,
            patternState: this._getPatternState(props)
        })
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.props.componentKey != nextProps.componentKey)
            this._updateComponentState(nextProps)
    }

    _getPatternProps() {
        return {
            ...this.state.patternState,
            extraToggleClass: this._getToggleExtraClass()
        }

    }


    _getPatternState(props) {
        const pattern = props.pattern

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
            ...this.state,
            extraActive: !this.state.extraActive
        })
    }

    _getToggleExtraClass() {
        return this.state.extraActive ? " active" : ""
    }

    _setFakeProps(element) {
        const fakeProps = element.fakeProps
        if (fakeProps)
            element.defaultProps = {
                ...element.defaultProps,
                ...fakeProps
            }
        return element
    }

    _getElement() {
        const pattern = this._setFakeProps(this.props.pattern)
        return React.createElement(pattern)
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