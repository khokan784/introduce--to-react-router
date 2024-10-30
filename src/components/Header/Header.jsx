import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <h2>My Website</h2>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/post'>Post</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;