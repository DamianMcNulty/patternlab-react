import React from 'react'

// Get menu items from generated file
import patternLabConfig from '../../../get-sm-config'
const config = patternLabConfig()
const {jsonFileStruc} = config.patternLabSourcemap

// Import components
import SGMenu from '../../molecules/menu/SGMenu'

// Declare this component
export default class SGPrimaryNav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rootMenuActive: false,
            activeMenus: []
        }
    }

    // Return array of all menu items
    _getRootMenuItems() {
        let menuItems = []
        jsonFileStruc.filter(item => {
                const order = config.defaultOrder.indexOf(item.name)
                if (order >= 0) {
                    menuItems[order] = item
                    return false
                }
                return true
            }).forEach(item => {
                menuItems.push(item)
            })
        
        return menuItems
    }

    // Update activeMenus (NB. no menuItemKey signifies a reset, ie. click link)
    _onClick(menuLevel, menuItemKey, evt) {
        // Get root menu active
        const rootMenuActive = menuItemKey ? this.state.rootMenuActive : false

        // If level 0 start a fresh list
        let activeMenus = menuLevel ? this.state.activeMenus : []
        
        // If submenu link
        if (menuItemKey) {
            evt.preventDefault()
            let thisMenuActive = (this.state.activeMenus[menuItemKey])
            activeMenus[menuItemKey] = !thisMenuActive
        }

        this.setState({
            rootMenuActive,
            activeMenus
        })
    }

    // Return if menu is active
    _getActiveMenu(menuItemKey) {
        return (this.state.activeMenus[menuItemKey])
    }

    // Toggle root menu (small device view)
    _toggleRootMenu(evt) {
        evt.preventDefault()
        this.setState({
            ...this.state,
            rootMenuActive: !this.state.rootMenuActive
        })
    }

    render() {
        // Setup props
        const props = {
            menuItems: this._getRootMenuItems(),
            _getActiveMenu: this._getActiveMenu.bind(this),
            _onClick: this._onClick.bind(this)
        }

        let containerClass = "sg-nav-container"
        if (this.state.rootMenuActive) containerClass += " active"

        // Return JSX
        return (
            <div>
                <a href="#" className="sg-nav-toggle" onClick={this._toggleRootMenu.bind(this)}>
                    Menu
                </a>
                <div className="sg-nav-container">
                    <SGMenu {...props} />
                </div>
            </div>
        )
    }
}