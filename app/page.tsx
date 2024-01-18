import styles from "@/styles/styles.module.css"
import Footer from "@/components/Footer"
import Menu from "@/components/Menu"
import Image from "next/image"

export default function Home() {
  return (
    <>
      {/*}<Head>
        <title>Mi Página web</title>
        <meta httpEquiv="Context-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      </Head>{*/}
      
      <Menu/>
      {/* Contenido principal */}
      <div className={styles.content}>
        <h1>Cintya Karina Banda González</h1>
        <h1>_______________________________________</h1>
        <h1>Redes Sociales</h1>
        <ul>Facebook: KariiBanda</ul>
        <ul>Github: CintyaKarinaBanda</ul>
        
      </div>
      <Image src={"/descarga.png"} alt="imagen" width={500} height={500}/>

      <Footer/>
    </>
  )
}
