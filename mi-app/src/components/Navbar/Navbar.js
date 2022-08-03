import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className="lista-nav">
                
                <li><Link to='/inicio'>Inicio</Link></li>
                <li><Link to='/productos'>Productos</Link></li>
                <li><Link to='/category/contacto'>Contacto</Link></li>
                
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar


