import Head from 'next/head'
import styles from '../styles/Tab.module.css'
import { useState } from 'react'

export default function Tab1() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tab 1 Page</title>
        <meta name="description" content="You are in Tab 1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.tabs}>
        <div className={`${styles.tab} ${activeTab === 1 && styles.active}`} onClick={() => setActiveTab(1)}>Upcoming<span className={styles.notification}>2</span></div>
        <div className={`${styles.tab} ${activeTab === 2 && styles.active}`} onClick={() => setActiveTab(2)}>Development</div>
        <div className={`${styles.tab} ${activeTab === 3 && styles.active}`} onClick={() => setActiveTab(3)}>Completed</div>
        <span className={styles.glider}></span>
      </div>
    </div>
  )
}
