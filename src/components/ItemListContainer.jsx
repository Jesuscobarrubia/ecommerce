import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getFetch } from "../datos/api";


const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            getFetch
            .then(data => setProductos(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);


    return(
        <>
            {loading ? <h4>Cargando...</h4> : <ItemList dataProductos={productos}/>}            
        </>
    )
}




export default ItemListContainer
