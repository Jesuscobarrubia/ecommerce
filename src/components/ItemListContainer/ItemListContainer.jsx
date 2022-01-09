import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getFetch } from "../../datos/api";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {idCategoria , idFase} = useParams();

    useEffect(() => {
        if (idCategoria) {
            getFetch
            .then(data => setProductos(data.filter(data => data.categoria === idCategoria)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
        } else if (idFase) {
            getFetch
            .then(data => setProductos(data.filter(data => data.fase === idFase)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
        } else {
            getFetch
            .then(data => setProductos(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
        }

    }, [idCategoria , idFase]);


    return(
        <>
            {loading ? <h4>Cargando...</h4> : <ItemList dataProductos={productos}/>}            
        </>
    )
}




export default ItemListContainer
