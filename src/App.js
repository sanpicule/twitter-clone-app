import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';
import Widgets from './components/widget/Widgets';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';


function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
            <Route path='/' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/home' element={<Sidebar />} />
        </Routes>
        <Routes>
          <Route path='/home' element={<Timeline />} />
        </Routes>
        <Routes>
          <Route path='/home' element={<Widgets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
