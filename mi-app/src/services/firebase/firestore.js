import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '.'
import { createAlterdProductFromFirestore } from '../../adapters/productAlterd';

export const getProducts = (categoryId) => {
     const collectionRef = !categoryId 
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))

        return getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return createAlterdProductFromFirestore(doc)
            })
            return products
        }).catch(error => {
            return error
        })
}

