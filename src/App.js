import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.css'
import Login from './Login';
import Main from './Main';
import { auth } from './Firebase';
import { login, logout, selectUser } from './feature/userSlice';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photoURL: authUser.photoURL,
          displayName: authUser.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
    return () => {
      unSub()
    }
  }, [dispatch])
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
  );
}

export default App;
