import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from"../styles/Layout.module.css"; 
import utilStyles from "../styles/utils.module.css";

const name = "Schneider Correa Alvarado |Profesional en Ciencia de la información"


export default function Layout({ children, title, description, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/2.jpg"
              className={utilStyles.borderCircle}
              height={150}
              width={150}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/yo.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <nav>
          <Link href="/">
            Inicio |  
          </Link>
          <Link href="/blog">
              Blog | 
          </Link>
          <Link href="/contacto">
            Contacto
          </Link>
        </nav>

            <main>{children}</main>

            {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Volver al inicio</Link>
        </div>
      )}
        </div>
    )
}

//se puede enviar un title y un description por defecto si no se envía nada cuando se importar el componente: 

Layout.defaultProps = {
    title: "Schneider | mi website",
    description: "Conoce un poco sobre mí"
}

