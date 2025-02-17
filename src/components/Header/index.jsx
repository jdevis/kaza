import { NavLink } from 'react-router-dom'
import logoHome from '../../assets/img/logo-header.png'
import './header.scss'

const Header = () => {
    return (
        <header>
            <img src={logoHome} className='logo' />
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