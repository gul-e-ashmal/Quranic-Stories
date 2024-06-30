import "./App.css";
import Sidebar from "./components/Sidebar";
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
  Account,
  Users,
} from "./Data/Links";
// import Account from "./pages/Account";
// import Users from "./pages/Users";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppGlass flex flex-row w-screen ">
          <Sidebar className=" lg:max-w-[40%]" />

          <div className=" sm:flex-1  overflow-y-auto  ">
            <Routes>
              <Route path="Seerah-Timeline" element={<SeerahTimeline />} />
              <Route
                path="Other-Prophet-Timeline"
                element={<ProphetTimeline />}
              />
              <Route path="tafsir" element={<Tafsir />} />
              <Route path="Quran-Links" element={<QuranLinks />} />
              <Route path="Miracles" element={<Miracles />} />
              <Route
                path="Reflection-Questions"
                element={<ReflectionQuestion />}
              />
              <Route path="aboutUs" element={<AboutUs />} />
              <Route path="users" element={<Users />} />
              <Route path="Account" element={<Account />} />
             
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
