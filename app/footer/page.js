import styles from './Footer.module.css'
import Link from 'next/link'


export default function Footer() {

    return(

        <>

         
            <footer className={` text-center text-lg-start ${styles.footerContainer}`}>
 
  <div className={`text-center p-3 ${styles.divFooterColor}`}>
    © 2021 Copyright:
    <Link className={`text-dark ${styles.linkFooter}`} href="https://github.com/FrankieSilvaSantos"> <span className={`${styles.spanFooter}`}>Curso do NextJs</span></Link>
  </div>
 

</footer>

        </>

    )

}