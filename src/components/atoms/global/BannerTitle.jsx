import React from 'react'

// Declare this component
class BannerTitle extends React.Component {
    render() {
        // Return JSX
        return (
            <h1 className="banner__title banner-center">
                {this.props.title}
            </h1>
        )
    }
}

// Setup propTypes
BannerTitle.propTypes = {
    title: React.PropTypes.string.isRequired
}

export default BannerTitle