import React from 'react'

// Import components
import SGPatternExtraInfo from '../../molecules/pattern/SGPatternExtraInfo'
import SGPatternExtraCode from '../../molecules/pattern/SGPatternExtraCode'

// Declare this component
export default class SGPatternExtra extends React.Component {
    render() {
        if (!this.props.patternLabComponent) return null
        const extraClass = "sg-pattern-extra" + this.props.extraToggleClass

        // Return JSX
        return (
            <div className={extraClass}>
                <div className="sg-modal-content-inner">
                    <div className="sg-pattern-extra-inner">
                        <SGPatternExtraInfo {...this.props} />
                        <SGPatternExtraCode {...this.props} /> 
                    </div>
                </div>
            </div>
        )
    }
}