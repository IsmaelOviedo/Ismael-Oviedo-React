import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <ul className='lista-nav'>
            <CartWidget />
                <li>
                    Inicio
                </li>
                <li>
                    Productos
                </li>
                <li>
                    Contactos
                </li>
            </ul>

        </nav>
    )
}

export default Navbar