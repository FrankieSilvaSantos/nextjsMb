import styles from './Footer.module.css'

export default function Footer() {

    return(

        <>

         
            <footer className={` text-center text-lg-start ${styles.footerContainer}`}>
 
  <div className={`text-center p-3 ${styles.divFooterColor}`}>
    © 2021 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">Curso do NextJs</a>
  </div>
 

</footer>

        </>

    )

}