const products = [
    {
        id: '1',
        name: 'Vestido Azul',
        price: 5000,
        category: 'Vestimenta',
        img: 'imagenes/vestido-azul.jpg',
        stock: 5,
        description: 'Vestido de seda con tajo a un costado y frunses adelante',
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
