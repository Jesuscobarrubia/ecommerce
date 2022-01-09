import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import { getFetch } from '../../datos/api'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true);

    const { idDetalle } = useParams();

    useEffect(() => {
        setTimeout(() => {
            getFetch
            .then(data => setProducto(data.find(prod => prod.id === idDetalle)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));

        }, 2000);
    }, [])


    return (
        <div>            
            {loading ? <h4>Cargando...</h4> : <ItemDetail informacion={producto}/>} 
        </div>
    )
}

export default ItemDetailContainer
