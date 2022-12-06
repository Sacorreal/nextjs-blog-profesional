import Layout from "../../components/Layout";
import Link from "next/link"; 

export default function Blog({ data }) {
    return (
        <Layout>
            <h1>Esto es lo que he escrito, si quieres leer un poco:</h1>
            {
                data.map(({ id, title, body }) => (
                    <div key={id}>
                        <Link href={`/blog/${id}`}>
                            <h3>{id} - {title}</h3>
                        </Link>
                        <p>{body}</p>
                    </div>
                ))
            }
        </Layout>
    )
}


export async function getStaticProps() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    }
    catch (error) { console.log(error) }
}



