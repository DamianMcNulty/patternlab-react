import React from 'react'

// Declare this component
class SGAnnotation extends React.Component {
    render() {
        return (
            <li>
                <h4 className="sg-annotations-list-title">{this.props.title}</h4> 
                <p dangerouslySetInnerHTML={{__html:this.props.comment}}></p>
            </li>
        )
    }
}

SGAnnotation.propTypes = {
    title: React.PropTypes.string.isRequired,    
    comment: React.PropTypes.string.isRequired,    
}

export default SGAnnotation