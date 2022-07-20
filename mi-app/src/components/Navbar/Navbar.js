import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <CartWidget />
            <div className='titulo'>
                <strong>AlainaStore</strong>

                <li>
                   Contacto
                </li>
                <li>
                    Productos
                </li>
                <li>
                    Galeria
                </li>
                <li>
                    Inicio
                </li>
            </div>
        </nav>
    )
}

export default Navbar