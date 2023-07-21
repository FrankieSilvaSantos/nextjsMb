import Link from "next/link"
import styles from './Details.module.css'

    

    export async function generateMetadata({ params, searchParams }, parent) {
      // read route params
      const id = params.id
    
    
     
      // fetch data
      const product = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => res.json())
     
      // optionally access and extend (rather than replace) parent metadata
      const previousImages = (await parent).openGraph?.images || []
     
      return {
        title: product.title,
        openGraph: {
          images: ['/some-specific-page-image.jpg', ...previousImages],
        },
      }
    }
     
    export default function Details({ params, searchParams }) {

    return(

        <section className={`${styles.containerDetails}`}>

<h1>Comentario {params.id}</h1>
        </section>
    )

}