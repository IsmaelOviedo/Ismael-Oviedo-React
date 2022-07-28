const products = [
    {
        id: '1',
        name: 'Vestido Azul',
        price: 5000,
        category: 'Vestimenta',
        img: 'imagenes/vestido-azul.jpg',
        stock: 5,
        description: 'Vestido de moda',
    }
]

export const getProduct = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

