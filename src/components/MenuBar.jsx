import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import Logo from "../imgs/logo.png";
// import { Link } from 'react-router-dom';
// import "./Sidebar.css";

const MenuBar = () => {
    //const { collapseSidebar } = useProSidebar();
    return (
        <div>
            <Sidebar>
                <Menu menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        // only apply styles on first level elements of the tree
                        if (level === 0)
                            return {
                                color: disabled ? '#f5d9ff' : '#d359ff',
                                backgroundColor: active ? '#eecef9' : undefined,
                            };
                    },
                }}
                >
                    
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}
export default MenuBar;