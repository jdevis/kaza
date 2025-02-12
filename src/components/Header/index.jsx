import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/Logo'
import './header.scss'

function Header() {
    return (
        <header>
            <Logo/>
            <nav>
                <NavLink to="/">
                    Accueil
                </NavLink>
                <NavLink to="/about">
                    A propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header