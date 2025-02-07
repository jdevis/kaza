import logoFooter from '../../assets/logo-footer.png'
import './footer.scss'

function Footer() {
    return (
        <footer>
            <img src={logoFooter}/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer