import Head from 'next/head'
import styles from '../styles/Tab.module.css'

export default function Tab1() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tab 1 Page</title>
        <meta name="description" content="You are in Tab 1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.tabs}>
        <input type="radio" id="radio-1" name="tabs" checked />
        <label className={styles.tab} htmlFor="radio-1">Upcoming<span className={styles.notification}>2</span></label>
        <input type="radio" id="radio-2" name="tabs" />
        <label className={styles.tab} htmlFor="radio-2">Development</label>
        <input type="radio" id="radio-3" name="tabs" />
        <label className={styles.tab} htmlFor="radio-3">Completed</label>
        <span className={styles.glider}></span>
      </div>
    </div>
  )
}
