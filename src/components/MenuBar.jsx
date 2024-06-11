import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import React, { useState } from "react";
import Logo from "../imgs/logo.png";
// import { Link } from 'react-router-dom';
// import "./Sidebar.css";

const MenuBar = () => {
    const [toggled, setToggled] = useState(false);

    return (
        <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
            <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
                <Menu>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
            <main style={{ display: 'flex', padding: 10 }}>
                <div>
                    <button className="sb-button" onClick={() => setToggled(!toggled)}>
                        Toggle
                    </button>
                </div>
            </main>
        </div>
    );
}
export default MenuBar;