import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div>
                <strong>AlainaStore</strong>
            </div>
            <div>
                <button>Productos</button>
                <button>Galeria</button>
                <button>Contacto</button>
            </div>
        </nav>
    )
}

export default Navbar