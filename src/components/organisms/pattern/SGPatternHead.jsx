import React from 'react'

// Import components
// import SGTileList from '../molecules/SGTileList'

// Declare this component
class SGPatternHead extends React.Component {

    // TODO: move to component
    _getExtraToggle() {
        if (!this.props.patternLabComponent) return

        const toggleClass = "sg-pattern-extra-toggle" + this.props.extraToggleClass
        return (
            <a href="#" title="View Pattern Info" className={toggleClass} onClick={this.props._toggleExtra} >
                <span>▼</span>
            </a>
        )
    }

    render() {
        // Return JSX
        return (
            <div className="sg-pattern-head">
                <h3 className="sg-pattern-title">
                    <a href={this.props.linkToComponent} className="patternLink" title="Link to Pattern">
                        {this.props.componentTitle}
                    </a>
                </h3>
                {this._getExtraToggle()}
            </div>
        )
    }
}

// Default props
SGPatternHead.defaultProps = {
    patternLabComponent: false,
    extraToggleClass: ""
}

// Setup propTypes
SGPatternHead.propTypes = {
    patternLabComponent: React.PropTypes.bool.isRequired,
    extraToggleClass: React.PropTypes.string.isRequired,
    linkToComponent: React.PropTypes.string.isRequired,
    componentTitle: React.PropTypes.string.isRequired,
    _toggleExtra: React.PropTypes.func
}

export default SGPatternHead