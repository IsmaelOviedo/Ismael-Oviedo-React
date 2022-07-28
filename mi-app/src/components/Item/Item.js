

const Item = ({id, name, img, price}) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p
                className='Info'>
                    Precio: ${price}
                </p>
            </section>
        </article>
    )
}
export default Item

