import React from 'react'

// Import components
import SGAnnotation from '../../atoms/pattern/SGAnnotation'

// Declare this component
export default class SGPatternExtraInfo extends React.Component {

    _getAnnotations() {
        if (!this.props.annotations) return

        return (
            <div className="sg-annotations">
                <h2 className="sg-annotations-title">Annotations</h2>
                <ol className="sg-annotations-list">
                    {this._mapAnnotations(this.props.annotations)}
                </ol>
            </div>
        )
    }

    _mapAnnotations(annotations) {
        return annotations.map((annotation, index) => (
                <SGAnnotation key={index} {...annotation} />
            )
        )
    }

    render() {
        return (
            <div className="sg-pattern-extra-info">
                <div className="sg-pattern-desc">
                    <p dangerouslySetInnerHTML={{__html:this.props.componentDesc}} />
                </div>
                <p className="sg-pattern-lineage">
                    Lineage: TODO
                </p>
                {this._getAnnotations()}
            </div>            
        )
    }
}