import React from 'react'
import {PrismCode} from "react-prism"
import {html} from 'js-beautify'
// beautify = require('js-beautify').js_beautify,

// Import components
// import SGTileList from '../molecules/SGTileList'

// TODO move to constants
const tabNames = {
    jsx: 'jsx',
    html: 'html',
    defaultProps: 'defaultProps',
    propTypes: 'propTypes'
}

// Declare this component
export default class SGPatternExtraCode extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tabActive: tabNames.jsx
        }
    }

    _onToggleTab(tab, evt) {
        evt.preventDefault()
        this.setState({
            tabActive: tab
        })
    }

    _getTabStyle(tab) {
        return {
            display: this.state.tabActive === tab ? 'block' : 'none'
        }
    }

    _getTabLiClass(tab) {
        return this.state.tabActive === tab ? "sg-tab-title-active" : ""
    }

    _getTabLinkClass(tab) {
        return this.state.tabActive === tab ? "active" : ""
    }

    render() {
        return (
            <div className="sg-pattern-extra-code">
                <div className="sg-tabs">
                    <ul className="sg-tabs-list">
                        <li className={this._getTabLiClass(tabNames.jsx)}>
                            <a href="#" className={this._getTabLinkClass(tabNames.jsx)} onClick={this._onToggleTab.bind(this, tabNames.jsx)}>
                                JSX
                            </a>
                        </li>
                        <li className={this._getTabLiClass(tabNames.html)}>
                            <a href="#" className={this._getTabLinkClass(tabNames.html)} onClick={this._onToggleTab.bind(this, tabNames.html)}>
                                HTML
                            </a>
                        </li>
                        <li className={this._getTabLiClass(tabNames.defaultProps)}>
                            <a href="#" className={this._getTabLinkClass(tabNames.defaultProps)} onClick={this._onToggleTab.bind(this, tabNames.defaultProps)}>
                                Default Props
                            </a>
                        </li>
                        <li className={this._getTabLiClass(tabNames.propTypes)}>
                            <a href="#" className={this._getTabLinkClass(tabNames.propTypes)} onClick={this._onToggleTab.bind(this, tabNames.propTypes)}>
                                Prop Types
                            </a>
                        </li>
                    </ul>

                    <div className="sg-tabs-content">
                        <div className="sg-tabs-panel" style={this._getTabStyle(tabNames.jsx)}>
                            <pre>  
                                <PrismCode className="language-markup">
                                    {this.props.jsxMarkup}
                                </PrismCode>
                            </pre>
                        </div>
                        <div className="sg-tabs-panel" style={this._getTabStyle(tabNames.html)}>
                            <pre>  
                                <PrismCode className="language-markup">
                                    {html(this.props.markup)}
                                </PrismCode>
                            </pre>
                        </div>
                        <div className="sg-tabs-panel" style={this._getTabStyle(tabNames.defaultProps)}>
                            <pre>  
                                <PrismCode className="language-javascript">
                                    {JSON.stringify(this.props.defaultProps, null, 4)}
                                </PrismCode>
                            </pre>
                        </div>
                        <div className="sg-tabs-panel" style={this._getTabStyle(tabNames.propTypes)}>
                            <pre>  
                                <PrismCode className="language-javascript">
                                    {JSON.stringify(this.props.propTypes, null, 4)}
                                </PrismCode>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
