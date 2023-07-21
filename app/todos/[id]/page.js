import Link from "next/link"
import styles from './Id.module.css'

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
 
export default function Id({ params, searchParams }) {

  

  return(

    <section className={`${styles.containerId}`}>
      <h1>ID: {searchParams.id}</h1>

      <Link href={`/todos/${searchParams.id}/[details]?details=${searchParams.id}`}>Details</Link>
    </section>

  )

}