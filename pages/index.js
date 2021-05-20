import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Motion, spring, presets } from 'react-motion'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Created by Michael Maurer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>&rarr; Welcome to my Portfolio! &larr;</h1>
        <Motion
          defaultStyle={{ x: 0 }}
          style={{ x: spring(50, presets.gentle) }}
        >
          {value => <div>{value.x}</div>}
        </Motion>
      </main>
    </div>
  )
}
