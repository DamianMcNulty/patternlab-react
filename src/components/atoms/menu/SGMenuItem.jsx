import React from 'react'
import { Link } from 'react-router'

// Import components
import SGMenu from '../../molecules/menu/SGMenu'

// Declare this component
class SGMenuItem extends React.Component {
    constructor(props) {
        super(props)
    }

    _getMenuItemKey() {
        return this.props.path ? this.props.path : this.props.name
    }

    _isFile() {
        // TODO: move to state?
        return this.props.type == 'file'
    }

    _getActiveClass() {
        const menuItemKey = this._getMenuItemKey()
        return this.props._getActiveMenu(menuItemKey) ? " active" : ""
    }

    _getItemLink() {
        const onClickLink = this.props._onClick.bind(this, 0, null)
        const onClickSubmenu = this.props._onClick.bind(this, this.props.menuLevel, this._getMenuItemKey())
        if (this._isFile()) 
            return (
                <Link to={this._getPath()} onClick={onClickLink}>
                    {this.props.name}
                </Link>  
            )

        const linkClassName = "sg-acc-handle" + this._getActiveClass()
        return (
            <a href="#" className={linkClassName} onClick={onClickSubmenu}>
                {this.props.name}
            </a>
        )
    }

    _getSubMenu() {
        if (this._isFile()) return

        const props = {
            activeClass: this._getActiveClass(),
            menuItems: this.props.children,
            _onClick: this.props._onClick,
            _getActiveMenu: this.props._getActiveMenu,
            menuLevel: this.props.menuLevel + 1
        }
        return <SGMenu {...props} />
    }

    _getPath() {
        return '/style-guide/' + this.props.path
    }

    render() {
        const itemLink = this._getItemLink()
        const subMenu = this._getSubMenu()
        const linkPath = this._getPath()

        // Return JSX
        return (
            <li>
                {itemLink}
                {subMenu}
            </li>
        )
    }
}

// Setup propTypes
SGMenuItem.propTypes = {
    menuLevel: React.PropTypes.number.isRequired,
    type: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    _getActiveMenu: React.PropTypes.func.isRequired,
    _onClick: React.PropTypes.func.isRequired
}

export default SGMenuItem