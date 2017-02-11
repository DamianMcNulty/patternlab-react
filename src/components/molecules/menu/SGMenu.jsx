import React from 'react'

// Import components
import {PatternLabComponent} from '@peteyg/patternlab-react-component'
import SGMenuItem from '../../atoms/menu/SGMenuItem'

import patternLabConfig from '../../../get-sm-config'
const config = patternLabConfig()

let componentList = []
if (config && config.patternLabSourcemap) {
    componentList = config.patternLabSourcemap.componentList
} 

// Declare this component
class SGMenu extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return !this.props.menuLevel ||
            this.props.activeClass != "" ||
            this.props.activeClass != nextProps.activeClass
    }

    // Return menu items on this level
    _getMenuItems() {
        return this.props.menuItems.map((menuItem, index) => {
            const props = {
                ...menuItem,
                menuLevel: this.props.menuLevel,
                _getActiveMenu: this.props._getActiveMenu,
                _onClick: this.props._onClick
            }

            // Get display name
            if (menuItem.path){
                const component = componentList[menuItem.path]
                // if (component && component.prototype instanceof PatternLabComponent) 
                if (component && component.__proto__.name === PatternLabComponent.name)
                    props.name = component.getTitle()
            }

            return <SGMenuItem key={index} {...props} />
        })
    }

    render() {
        const menuItems = this._getMenuItems()
        let menuClass = "sg-acc-panel  sg-sub-nav"
        switch (this.props.menuLevel) {
            case 0: 
                menuClass = "sg-nav"
                break
            case 1: 
                menuClass = "sg-acc-panel"
                break
        }
        menuClass += this.props.activeClass

        // Return JSX
        return (
            <ol className={menuClass}>
                {menuItems}
            </ol>
        )
    }
}

// Default props
SGMenu.defaultProps = {
    activeClass: "",
    menuLevel: 0
}

// Setup propTypes
SGMenu.propTypes = {
    activeClass: React.PropTypes.string.isRequired,
    menuLevel: React.PropTypes.number.isRequired,
    menuItems: React.PropTypes.array.isRequired,
    _getActiveMenu: React.PropTypes.func.isRequired,
    _onClick: React.PropTypes.func.isRequired
}

export default SGMenu