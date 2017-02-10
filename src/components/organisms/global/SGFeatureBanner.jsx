import React from 'react'

// Import components
import BannerTitle from '../../atoms/global/BannerTitle'

// Declare this component
export default class SGFeatureBanner extends React.Component {
    render() {
        // Return JSX
        return (
            <section className="banner banner--feature">
                <BannerTitle {...this.props} />
            </section>
        )
    }
}