import React from 'react'

// Import components
import SGTileListItem from '../../atoms/global/SGTileListItem'

// Declare this component
class SGTileList extends React.Component {
    render() {

        const tileList = this.props.tileList.map((tileProps, index) => (
            <SGTileListItem key={index} {...tileProps} /> 
        ))

        // Return JSX
        return (
            <ul className="g g--2up tile-list">
                {tileList}
            </ul>
        )
    }
}

// Setup propTypes
SGTileList.propTypes = {
    tileList: React.PropTypes.array.isRequired
}

export default SGTileList