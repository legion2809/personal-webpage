import '../../styles/Header.css'
import React, { useState } from 'react'

import HeaderLinks from './HeaderLinks'
import { header_links } from '../../util_data'
import reactLogo from '../../../assets/img/react.svg'

export default function Header() {
    const [openMenu, setMenuOpen] = useState(false);

    return (
        <header>
            <img class="main_logo" src={reactLogo} alt="Webpage logo" width="40" height="40" />

            <nav class="header_links">
                <div className="navbar_collapse" onClick={() => setMenuOpen(!openMenu)}>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <ul className={openMenu ? "collapsed" : "closed"}>
                    {header_links.map((link) => <HeaderLinks key={link.href} {...link} />)}
                </ul>
            </nav>
        </header>
    )
}