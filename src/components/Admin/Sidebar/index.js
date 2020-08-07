import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Sidebar = props => {
    return (
      <aside id="left-panel" className="left-panel">
      <nav className="navbar navbar-expand-sm navbar-default">
        <div id="main-menu" className="main-menu collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/admin"><i className="menu-icon fa fa-laptop" />Dashboard </Link>
            </li>
            <li className="menu-title">UI elements</li>{/* /.menu-title */}
            <li className="menu-item">
              <Link to="/admin/product" className="menu-item"> <i className="menu-icon fa fa-heart" />Product</Link>
            </li>
            <li className="menu-item">
              <Link to="/admin/category" className="menu-item"> <i className="menu-icon fa fa-heart" />Category</Link>
            </li>
            
          </ul>
        </div>{/* /.navbar-collapse */}
      </nav>
    </aside>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
