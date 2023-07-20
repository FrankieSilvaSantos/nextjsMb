"use server"

import Link from "next/link"
import styles from './Header.module.css'
import About from "../about/page"
import Products from "../products/page"

export default async function Header() {

        return(

            <>
               <nav className={`navbar navbar-expand-lg ${styles.navbarStyle}`}>
  <div className={`container-fluid  `}>
    <a className={`nav-link ${styles.linkStyle2}`} href="#">PokeNext</a>
    <button className={`navbar-toggler ${styles.navbarToggler2}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className={`navbar-toggler-icon ${styles.navbarTogglerStyle}`}></span>
    </button>
    
        <div className={`collapse navbar-collapse ${styles.navStylePosition}`} id="navbarNav">
      
      <ul className={`navbar-nav `}>
        <li className={`nav-item `}>
          <Link className={`nav-link ${styles.linkStyle}`}  href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${styles.linkStyle}`} href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${styles.linkStyle}`} href="/products">Produtos</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${styles.linkStyle}`} href='#'>Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
  
</nav>
            </>

        )

}