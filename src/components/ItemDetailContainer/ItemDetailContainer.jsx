import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'
import { BeatLoader } from 'react-spinners';

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
            setLoading(false);
        }, 2000);
    }, [idDetalle]);


    return (
        <div>            
            {loading ? 
            //TRUE
            <div className='spinner'><BeatLoader></BeatLoader></div> 
            :
            //FALSE
            <ItemDetail informacion={producto}/>} 
        </div>
    )
}

export default ItemDetailContainer
