import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect } from 'react'
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
            const dataBase = getFirestore()
            const queryCollection = doc(dataBase, 'items', idDetalle)
            getDoc(queryCollection)
            .then(resp => setProducto({id: resp.id, ...resp.data()}))


            // getFetch
            // .then(data => setProducto(data.find(prod => prod.id === idDetalle)))
            // .catch(error => console.log(error))
            // .finally(() => setLoading(false));

            setLoading(false);
        }, 2000);
    }, []);


    return (
        <div>            
            {loading ? <h4>Cargando...</h4> : <ItemDetail informacion={producto}/>} 
        </div>
    )
}

export default ItemDetailContainer
