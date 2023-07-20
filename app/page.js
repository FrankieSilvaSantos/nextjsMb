import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.mainContainer}>


        <section>
        <h1 className={`${styles.titleHome}`}>Home MotherFucker</h1>

          <section className={`${styles.borderStyle}`}></section>

      <img src='./img/noFace.jpg'></img>

      </section>
    </main>
  )
}
