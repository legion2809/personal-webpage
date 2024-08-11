import React, { useState } from 'react'
import reactLogo from '../../../assets/img/react.svg'
import hclasses from './Header.module.css'

import aboutme_ids from '../AboutMe/AboutMe.module.css'
import portfolio_ids from '../Portfolio/Portfolio.module.css'
import contacts_ids from '../Contacts/Contacts.module.css'

export default function Header() {
    const [openMenu, setMenuOpen] = useState(false);

    return (
        <header>
            <img class={hclasses.main_logo} src={reactLogo} alt="Webpage logo" width="40" height="40" />

            <nav class={hclasses.header_links}>
                <div className={hclasses.navbar_collapse} onClick={() => setMenuOpen(!openMenu)}>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <ul className={openMenu ? hclasses.collapsed : "closed"}>
                    <li>
                        <a href="#top" title="To 'Home' section">Home</a>
                    </li>
                    <li>
                        <a href={"#" + aboutme_ids.aboutme} title="To 'About me' section">About me</a>
                    </li>
                    <li>
                        <a href={"#" + portfolio_ids.portfolio} title="To 'Portfolio' section">Portfolio</a>
                    </li>
                    <li>
                        <a href={"#" + contacts_ids.contacts} title="To 'Contacts' section">Contacts</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}