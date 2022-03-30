import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PzzaNext | Get Pizza At Your Doorsteps </title>
        <meta name="description" content="Best Pizza At Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Homepage</h1>
    </div>
  )
}
