import './Checkout.css'
import { useContext } from "react"
import { useState } from "react";
import { CartContext } from '../../Context/CartContext'
import { addDoc, collection, Timestamp,  getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase/index'


const Checkout = () => {
    const [ order, purchasedOrder ] = useState (0)
    const { cart, clearCart, total } = useContext (CartContext)
    const [ ordenNumber, setOrderNumber, name, setName, mail, setMail ] = useState ("");
    const [ phone, setPhone ] = useState (0);

    if (order === 1) {
        return (
            <div>
                <h3> {name}, GRACIAS POR COMPRAR </h3>
                <h4> El número de orden de tu compra es #{ordenNumber} </h4>
            </div>
        )
    } 

    const generateOrder = async () => {
        try {
            const objOrder = {
                buyer: {
                    name: name,
                    phone: phone,
                    email: mail,
                },
                items: cart,
                total: `${total}`,
                date: Timestamp.fromDate(new Date())
            }

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAdded = cart.find(prod => prod.id === doc.id)
                const prodQuaantity = productAdded?.quantity

                if(stockDb >= prodQuaantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuaantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                const orderRef = collection(db, 'orders')
                const uploadedOrder = await addDoc(orderRef, objOrder)
                batch.commit()
                console.log(uploadedOrder.id)
                clearCart()
                setOrderNumber (uploadedOrder.id);
                purchasedOrder (1)
            } else {
                console.log('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            console.log('se termino la ejecucion de la funcion createOrder')
        }

    }

    return (
        <div>
            <h3 className="h3checkout"><strong>AlainaSotre</strong></h3>
            <form className="form-register">
                <label> <strong>NOMBRE:</strong> 
                    <input type = "text" className="controls" onChange = {(e) => {setName (e.target.value);}} />    
                </label>
                <label> <strong>CORREO ELECTRONICO:</strong>
                    <input type = "text" className="controls" onChange = {(e) => {setMail (e.target.value);}} />
                </label>
                <label> <strong>TELEFONO:</strong>
                    <input type = "number" className="controls" onChange = {(e) => {setPhone (e.target.value); }} />
                </label>
            </form>
            <button className="form__botones"  type = "submit" onClick = {generateOrder}> CONFIRMAR COMPRA </button>
        </div>
    )
}

export default Checkout