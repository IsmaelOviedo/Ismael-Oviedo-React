const products = [
    {
        id: '1',
        name: 'Vestido Azul',
        price: 5000,
        category: 'Vestimenta',
        img: '/imagenes/vestido-azul.jpg',
        stock: 5,
        description: 'Vestido de seda con tajo a un costado y frunses adelante',
    },

    {
        id: '2',
        name: 'Falda Negra',
        price: 500,
        category: 'Vestimenta',
        img: '/imagenes/falda-negra.jpg',
        stock: 10,
        description: 'Outfit',
    },

    {
        id: '3',
        name: 'Vestido Verde',
        price: 4000,
        category: 'Vestimenta',
        img: '/imagenes/vestido-verde.png',
        stock: 2,
        description: 'Elegancia',  
    },

    {
        id: '4',
        name: 'Vestido Marron',
        price: 4500,
        category: 'Vestimenta',
        img: '/imagenes/vestido-verde.png',
        stock: 1,
        description: 'Elegancia',  
    },
    {
        id: '5',
        name: 'Vestido Leopardado',
        price: 2000,
        category: 'Vestimenta',
        img: '/imagenes/vestido-verde.png',
        stock: 6,
        description: 'Elegancia',  
    },

    {
        id: '6',
        name: 'Gorro Naranja',
        price: 200,
        category: 'Vestimenta',
        img: '/imagenes/vestido-verde.png',
        stock: 5,
        description: 'Elegancia',  
    },
  
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
