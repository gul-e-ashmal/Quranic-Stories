import './App.css'
import Sidebar from './components/Sidebar';
import MenuBar from './components/MenuBar';
import MainDash from './components/MainDash/MainDash';
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <MenuBar />
        <MainDash/>
      </div>
    </div>
  );
}

export default App;
