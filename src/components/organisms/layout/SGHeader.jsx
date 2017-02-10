import React from 'react'

// Import components
import SGPrimaryNav from '../../organisms/navigation/SGPrimaryNav'

// Declare this component
export default class SGHeader extends React.Component {
    render() {
        // TODO: setup toggle button

        // Return JSX
        return (
            <header className="sg-header" role="banner">
                <a href="#sg-nav-container" className="sg-nav-toggle">
                    Menu
                </a>
                <SGPrimaryNav />            
            </header>
        )
    }
}

