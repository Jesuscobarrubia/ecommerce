import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getFetch } from "../../datos/api";
import { useParams } from "react-router-dom";
import { getFirestore, query, collection, getDocs, where } from "firebase/firestore"
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
            const queryCollection = query(collection(dataBase, 'items'));
            getDocs(queryCollection)
            .then(res => setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
        }

        
        /* OTRA FORMA DE CARGAR DATOS USANDO PROMESAS*/
        // if (idCategoria) {
        //     getFetch
        //     .then(data => setProductos(data.filter(data => data.categoria === idCategoria)))
        //     .catch(error => console.log(error))
        //     .finally(() => setLoading(false));
        // } else if (idFase) {
        //     getFetch
        //     .then(data => setProductos(data.filter(data => data.fase === idFase)))
        //     .catch(error => console.log(error))
        //     .finally(() => setLoading(false));
        // } else {
        //     getFetch
        //     .then(data => setProductos(data))
        //     .catch(error => console.log(error))
        //     .finally(() => setLoading(false));
        // }

    }, [idCategoria , idFase]);


    return(
        <>
            {loading ? <div className='spinner'><BeatLoader></BeatLoader></div> : <ItemList dataProductos={productos}/>}            
        </>
    )
}




export default ItemListContainer
