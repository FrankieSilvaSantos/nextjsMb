import Link from "next/link"
import styles from './Id.module.css'

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id
  

 
  // fetch data
  const product = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,

  
    
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}
 
export default async function Id({ params, searchParams }) {

  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`).then((res) => res.json())

  return(

    <section className={`${styles.containerId}`}>
      <h1>ID: {params.id}</h1>
    

<h2>Title: {data.title}</h2>
<h2>Completed: {data.completed.toString()}</h2>
    
      

      
      <div style={{height:'50vh'}}></div>
    </section>

  )

}