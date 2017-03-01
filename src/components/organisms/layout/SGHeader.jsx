import React from 'react'

// Import components
import SGPrimaryNav from '../../organisms/navigation/SGPrimaryNav'

// Declare this component
export default class SGHeader extends React.Component {
    render() {
        // Return JSX
        return (
            <header className="sg-header" role="banner">
                <SGPrimaryNav />            
            </header>
        )
    }
}