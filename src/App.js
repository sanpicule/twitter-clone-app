import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles/App.module.css'
import Login from './Login'
import Main from './Main'
import { auth, onAuthStateChanged } from './Firebase'
import { login, logout, selectUser } from './feature/userSlice'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        if(authUser.emailVerified) {
          setIsLoggedIn(true)
          dispatch(login({
            uid: authUser.uid,
            photoURL: authUser.photoURL,
            displayName: authUser.displayName
          }))
        }
      } else {
        setIsLoggedIn(false)
        dispatch(logout())
      }
    })
    return () => {
      unSub()
    }
  }, [dispatch])

  if (isLoggedIn === null) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className={styles.app}>
        {user.uid ? (
          <Main />
        ) : (
          <Login />
        )}
      </div>
    </>
  )
}

export default App
