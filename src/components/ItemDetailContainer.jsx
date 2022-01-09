import React, { useEffect } from 'react'
import { useState } from 'react'
import { getFetch } from '../datos/api'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            getFetch
            .then(data => setProducto(data.find(prod => prod.id === "1")))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));

        }, 5000)
    }, [])


    return (
        <div>            
            {loading ? <span></span> : <ItemDetail informacion={producto}/>} 
        </div>
    )
}

export default ItemDetailContainer
