import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Timeline from './components/timeline/Timeline'
import Widgets from './components/widget/Widgets'
import styles from './styles/Main.module.css'

function Main() {
  return (
    <div className={styles.main}>
      <Sidebar />
      <Timeline />
      <Widgets />
    </div>
  )
}

export default Main
