import React from 'react'

// Import components
import SGFeaturePage from '../templates/SGFeaturePage'

// Declare this component
export default class SGNotFound extends React.Component {
    render() {
        // Setup props
        const props = {
            title: "Page not found!"
        }

        // Return JSX
        return (
            <SGFeaturePage {...props} />
        )
    }
}