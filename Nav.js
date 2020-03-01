import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav() {
    return (
        <Nav>
            <NavLink to="/" exact={true} className={'links'}>Home</NavLink>
            <NavLink to="/skills"  className={'links'}>Skills</NavLink>
            <NavLink to="/projects" className={'links'}>Projects</NavLink>
            <NavLink to="/contact" className={'links'}>Contact</NavLink>
        </Nav>
    )
}

