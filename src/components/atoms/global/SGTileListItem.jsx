import React from 'react'

// Declare this component
class SGTileListItem extends React.Component {
    render() {
        // Setup props
        let itemClass = "gi tile"
        if (this.props.itemClass) itemClass += " " + this.props.itemClass

        // Return JSX
        return (
            <li className={itemClass}>
                {this.props.itemContent}
            </li>
        )
    }
}
// SGTileListItem.defaultProps = {
//     itemClass: ""
// }

// Setup propTypes
SGTileListItem.propTypes = {
    itemContent: React.PropTypes.object.isRequired
}

export default SGTileListItem