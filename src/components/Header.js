import { NavLink } from 'react-router-dom';

function Header(props){
    return (
        <header>
            <h3>Logo</h3>
            <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/project-gallery" >Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header;