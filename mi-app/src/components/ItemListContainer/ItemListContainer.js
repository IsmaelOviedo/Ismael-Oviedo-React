

import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../services/firebase/firestore'
import { useParams } from 'react-router-dom' 
import { useAsync } from '../../hooks/useAsync'
import { fetcher } from '../../utils/fetcher'

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const { isLoading, data, error } = useAsync(fetcher(getProducts, categoryId), [categoryId])

    if(isLoading) {
        return <h1>Nuestros Productos estan Cargando..</h1>
    }

    if(error) {
        return <h1>Ocurrio un error</h1>
    }

    if(data.length === 0) {
        return categoryId ? <h1>Ningun producto en categoria {categoryId}</h1> : <h1>No hay productos</h1>
    }

    return (
        <> 
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList products={data} />
        </>
    )
}

export default ItemListContainer