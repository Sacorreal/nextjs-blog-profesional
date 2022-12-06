import Layout from "../components/Layout";
import utilStyles from '../styles/utils.module.css';


export default function Home(){
  return (
    <Layout title="Home | Schneider Correa" home>
      <section className={utilStyles.headingMd}>
        <p>Hola! Te invito a que conozcas un poco más de mi</p>
        <p>
          Nací en {' '}<a href="https://es.wikipedia.org/wiki/Riohacha">Riohacha - La Guajira</a>, amante del buen vallenato del acordeón de Emilianito, Ender Alvarado y Pangue Maestre, es difícil resistir a las notas melodiosas de un acordeón aún más cuando naces en una tierra que en donde hasta los villancicos y canciones de cuna son vallenatos. <br/> Cree este espacio para compartir algo de mis pasiones, si el vallenato, pero tambien los datos y la ciencia de la información <br/>
          Si quieres contactarte conmigo escribeme a: <n/>schneidercorrea@gmail.com
        </p>
      </section>

    </Layout>

  )
}