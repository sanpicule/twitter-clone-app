import React from 'react'
import styles from './styles/Main.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Timeline from './pages/timeline/Timeline'
import Widgets from './layouts/widget/Widgets'
import Profile from './pages/profile/Profile'
import Sidebar from './layouts/sidebar/Sidebar'

function Main() {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path={'/'} element={<Timeline />} />
          <Route path={'/profile'} element={<Profile />} />
        </Routes>
        <Widgets />
      </BrowserRouter>
    </div>
  )
}

export default Main
