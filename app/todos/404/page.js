import Link from 'next/link'
import {BiSolidInvader} from 'react-icons/bi' 
import styles from './404.module.css'


export default function NotFound() {
  return (
    <div className={`${styles.containerNotFound}`}>
      <div>
      <div className={`alert alert-danger ${styles.error}`} role="alert">
      <BiSolidInvader className={`${styles.iconNotFound}`}  ></BiSolidInvader>     404 Pagina não encontrada<Link href="/" className={`alert-link ${styles.linkStyle}`}> Volte para a HOME</Link>
</div>
      <h2 className={`${styles.tituloNotFound}`}> </h2>
     
      <section style={{height:'27vh'}}></section> 
    </div>
    </div>
  )
}