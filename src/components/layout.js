import * as React from 'react'
import { Link } from 'gatsby'
import { 
    container,
    heading,
    navlinks,
    navlinkItem,
    navLinktext 

} from './layout.module.css'

const Layout = ({pageTitle, children}) =>{
    return(
        <main className = {container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navlinks}>
                    <li className={navLinktext}><Link to="/">Home</Link></li>
                    <li className={navLinktext}><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}
export default Layout