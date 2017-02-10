import React from 'react'
import { Link } from 'react-router'

// Import components
import SGTileList from '../../molecules/global/SGTileList'

// Declare this component
export default class SGHomeNav extends React.Component {
    render() {
        // Setup props
        const props = {
            tileList: [
                {
                    itemClass: "tile-center",
                    itemContent: <Link to="/">Homepage</Link>
                },
                {
                    itemClass: "tile-center tile--alt",
                    itemContent: <Link to="/style-guide">Style guide home</Link>
                }
            ]
        }

        // Return JSX
        return (
            <SGTileList {...props} />
        )
    }
}