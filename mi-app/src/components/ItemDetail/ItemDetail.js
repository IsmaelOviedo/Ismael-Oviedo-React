import React from "react";
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({id, name, category, img, price, stock, description }) {

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity);
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <div>
                <img src="/imagenes/vestido-azul.jpg" alt={name} className="ItemImg" />
            </div>

            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount stock={stock} onAdd={handleOnAdd} />
            </footer>
        </article>
    );
}

export default ItemDetail