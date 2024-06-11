import "./App.css";
import Sidebar from "./components/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import React, { useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutUs,
  ReflectionQuestion,
  Miracles,
  QuranLinks,
  ProphetTimeline,
  Tafsir,
  SeerahTimeline,
} from "./Data/Links";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle); 
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppGlass flex flex-row">
          <Sidebar />

          <div>
            <Routes>
              <Route path="Seerah-Timeline" element={<SeerahTimeline />} />
              <Route path="Other-Prophet-Timeline" element={<ProphetTimeline />} />
              <Route path="tafsir" element={<Tafsir />} />
              <Route path="Quran-Links" element={<QuranLinks />} />
              <Route path="Miracles" element={<Miracles />} />
              <Route path="Reflection-Questions" element={<ReflectionQuestion />} />
              <Route path="aboutUs" element={<AboutUs />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
