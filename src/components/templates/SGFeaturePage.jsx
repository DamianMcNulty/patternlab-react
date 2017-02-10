import React from 'react'

// Import components
import SGFeatureBanner from '../organisms/global/SGFeatureBanner'

// Declare this component
export default class SGFeaturePage extends React.Component {
    render() {
        // Return JSX
        return (
            <SGFeatureBanner {...this.props} />
        )
    }
}