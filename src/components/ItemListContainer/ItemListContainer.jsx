import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, query, collection, getDocs, where, orderBy } from "firebase/firestore"
import ItemList from "./ItemList";
import {BeatLoader} from 'react-spinners';


const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idCategoria , idFase} = useParams();

    useEffect(() => {
        if(idFase){
            const dataBase = getFirestore();
            const queryCollection = query(collection(dataBase, 'items'), where('fase', '==', idFase));
            getDocs(queryCollection)
            .then(res => setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
        }else if (idCategoria){
            const dataBase = getFirestore();
            const queryCollection = query(collection(dataBase, 'items'), where('categoria', '==', idCategoria));
            getDocs(queryCollection)
            .then(res => setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
        }else{
            const dataBase = getFirestore();
            const queryCollection = query(collection(dataBase, 'items'), orderBy("orden", "asc"));
            getDocs(queryCollection)
            .then(res => setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
        }

    }, [idCategoria , idFase]);

    return(
        <>
            {loading ? 
            //TRUE
            <div className='spinner'><BeatLoader></BeatLoader></div> 
            : 
            //FALSE
            <ItemList dataProductos={productos}/>}            
        </>
    )
}

export default ItemListContainer
