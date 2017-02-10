import React from 'react'

// Import components
import SGHeader from '../organisms/layout/SGHeader'
import SGFooter from '../organisms/layout/SGFooter'

// Declare this component
export default class SGLayout extends React.Component {
    render() {
        // Return JSX
        return (
            <div>
                <SGHeader />

                <div className="sg-page-wrap">
                    {this.props.children}
                </div>
        
                <SGFooter />
            </div>
        )
    }
}