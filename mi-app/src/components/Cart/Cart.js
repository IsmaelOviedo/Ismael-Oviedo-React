import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart, clearCart, getTotal, getQuantity, totalQuantity, total } = useContext(CartContext)  

    // const totalQuantity = getQuantity()
    // const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <h1>No hay productos en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button"><strong>Vaciar carrito</strong></button>
            <button className="Button"><strong>Confirmar Orden</strong></button>

        </div>
    )
}

export default Cart