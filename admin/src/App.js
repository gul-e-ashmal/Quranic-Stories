import logo from './logo.png';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import  Dashboard  from './pages/Dashboard'
import  SeerahTimeline  from './pages/SeerahTimeline'
import  Miracles  from './pages/Miracles'
import  About  from './pages/About'
import Navbar from './components/Navbar'
import MainDash from './components/MainDash/MainDash'
function App() {
  return (
    <div className="App">
      <div className="AppGlass"  >
       
        <Navbar />
        <MainDash />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route
              path="messages"
              element={<SeerahTimeline />}
            />
            <Route path="tasks" element={<Miracles />} />
          </Route>
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
