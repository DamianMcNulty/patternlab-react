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

    // Update activeMenus
    _onClick(menuLevel, menuItemKey, evt) {
        // If level 0 start a fresh list
        let activeMenus = menuLevel ? this.state.activeMenus : []
        
        // If submenu link
        if (menuItemKey) {
            evt.preventDefault()
            let thisMenuActive = (this.state.activeMenus[menuItemKey])
            activeMenus[menuItemKey] = !thisMenuActive
        }

        this.setState({
            activeMenus
        })
    }

    // Return if menu is active
    _getActiveMenu(menuItemKey) {
        return (this.state.activeMenus[menuItemKey])
    }

    render() {
        // Setup props
        const props = {
            menuItems: this._getRootMenuItems(),
            _getActiveMenu: this._getActiveMenu.bind(this),
            _onClick: this._onClick.bind(this)
        }

        // Return JSX
        return (
            <div className="sg-nav-container">
                <SGMenu {...props} />
            </div>
        )
    }
}