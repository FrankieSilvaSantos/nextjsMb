"use server"

import styles from './Todo.module.css'

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary

        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Todo() {
    const data = await getData()

    console.log(data)

    return (

        <section className={`${styles.containerTodo}`}>

            <h1 className={`${styles.titleTodo}`}>Todos API</h1>
            <section className={`${styles.borderStyleTodo}`}></section>


            <ul className={`list-group ${styles.listStyle}`}>
                {data.map((datos) => (
                    <div>
                        <li key={datos.id} className={`list-group-item ${styles.listLiStyle}`}>
                            <span className={`${styles.spanTodo}`}>userId: </span> {datos.userId}
                            <br></br>
                            <span className={`${styles.spanTodo}`}>Title:</span> {datos.title}
                            <br></br>
                            <span className={`${styles.spanTodo}`}>Completed:</span> {datos.completed.toString()}
                        </li>

                    </div>
                ))}

            </ul>

        </section>

    )

}