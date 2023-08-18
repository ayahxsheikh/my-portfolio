import { NavLink } from 'react-router-dom';

function Header(){
    return (
        <header>
            <div>
            <NavLink className="logo" to="/">AS</NavLink>
            </div>
            <nav>
            <NavLink to="#/home" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/project-gallery" >Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header;