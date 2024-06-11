import './App.css'
import Sidebar from './components/Sidebar';
import MainDash from './components/MainDash/MainDash';
import React, { useState } from "react";
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className="App">
      <div className="AppGlass"  >
        <Sidebar  />

        <MainDash/>
      </div>
    </div>
  );
}

export default App;