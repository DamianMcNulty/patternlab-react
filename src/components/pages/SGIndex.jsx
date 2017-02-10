import React from 'react'

// Import components
import SGFeaturePage from '../templates/SGFeaturePage'

// Declare this component
export default class SGIndex extends React.Component {
    render() {
        // Setup props
        const props = {
            title: "Style guide home."
        }

        // Return JSX
        return (
            <SGFeaturePage {...props} />
        )
    }
}