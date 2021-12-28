import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(props) {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light alert alert-secondary">
                <div className='container'>
                    <a className="navbar-brand " href="#">LOGO</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false}  aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/taskpage">Tasks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/userpage">User</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
