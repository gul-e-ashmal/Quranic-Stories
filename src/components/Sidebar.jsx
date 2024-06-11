import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [childselected, setchildselected] = useState((selected,0));
    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    console.log(window.innerWidth)
    return (
        <>
            <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
                <UilBars />
            </div>
            <motion.div className='sidebar'
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ''}
            >
                {/* logo */}
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    
                </div>

                <div className="menu">
                    {SidebarData.map((item, index) => {
                        return (
                            <div
                                className={selected === index ? "menuItem active" : "menuItem"}
                                key={index}
                                onClick={() => {setSelected(index) 
                                    } }
                            >
                               
                                <span>{item.heading}</span>
                            
                                {item.children && (
                                    <div className="submenu">
                                        
                                            {item.children.map((child, childIndex) => (
                                                <div className={selected === index && childselected === (selected,childIndex) ? "submenuItemactive" : "submenuItem"}
                                                    key={childIndex}
                                                    onClick={() => { setchildselected((selected,childIndex)) }}>
                                                    <span>{child.heading}</span>
                                                </div>
                                            ))}
                                       
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    {/* signoutIcon */}
                    <div className="menuItem">
                        <UilSignOutAlt />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
