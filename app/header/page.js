"use server"

import Link from "next/link"
import styles from './Header.module.css'
import About from "../about/page"
import Products from "../products/page"

export default async function Header() {

        return(

            <>
               <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className={`container-fluid  `}>
    <a className="navbar-brand" href="#">PokeNext</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
        <div className={`collapse navbar-collapse ${styles.navStylePosition}`} id="navbarNav">
      
      <ul className={`navbar-nav `}>
        <li className="nav-item">
          <Link className="nav-link"  href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/products">Produtos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
  
</nav>
            </>

        )

}