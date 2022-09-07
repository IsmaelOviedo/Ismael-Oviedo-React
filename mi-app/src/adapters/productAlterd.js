export const createAlterdProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAlterd = {
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        category: data.category,
        stock: data.stock,
        description: data.description,
    }
    
    return productAlterd;
}
