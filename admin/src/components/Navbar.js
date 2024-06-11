import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <div id="sidebar">
            <nav>
                <ul>
                    <li>
                        <NavLink className="menu" href={`/Content`}>Content</NavLink>
                    </li>
                    <ul>
                        <li>
                            <NavLink className="submenu" href={`/Seerah-Timeline`}>Seerah Timeline</NavLink>
                        </li>
                        <li>
                            <NavLink className="submenu" href={`/Other-Prophet-Timeline`}>Other-Prophet-Timeline</NavLink>
                        </li>
                        <li>
                            <NavLink className="submenu" href={`/Tafsir`}>Tafsir</NavLink>
                        </li>
                        <li>
                            <NavLink className="submenu" href={`/'Quran-Links`}>'Quran Links</NavLink>
                        </li>
                        <li>
                            <NavLink className="submenu" href={`/Miracles`}>Miracles</NavLink>
                        </li>
                        <li>
                            <NavLink className="submenu" href={`/Reflection-Questions`}>Reflection Questions</NavLink>
                        </li>
                        <li>
                            <NavLink className="submenu" href={`/AboutUs`}>About Us</NavLink>
                        </li>
                    </ul>
                    <li>
                        <NavLink className="menu" href={`/Settings`}>Settings</NavLink>
                    </li>
                    <ul>
                        <li>
                            <NavLink className="submenu" href={`/Users`}>Users</NavLink>
                        </li>
                    </ul>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar