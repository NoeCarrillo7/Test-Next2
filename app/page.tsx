import styles from "@/styles/styles.module.css"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className={styles.container}>
      {/*}<Head>
        <title>Mi Página web</title>
        <meta httpEquiv="Context-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      </Head>{*/}
      {/*Navbar*/}
      <nav className={styles.navbar}>
        <a href="#" className={styles.navbarBrand}>Home</a>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Ayuda</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Sesion</a>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className={styles.content}>
        <h1>Hola Mundo</h1>
      </div>
      <Footer/>
    </div>
  )
}
