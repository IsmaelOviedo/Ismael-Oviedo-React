import {useState, useEffect} from 'react'  

const Counter = ({ show, stock, initial }) => {
    const [count, setCount] = useState (0)

    useEffect(() => {
        console.log('function callback useEffect')

        return () => console.log('desmontarse')
    }, [show])

    const decrement = () => {
        if(count > initial) {
            setCount (count - 1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setCount (count + 1)
        }
    }
    console.log('renderiza')

    return(
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default Counter

