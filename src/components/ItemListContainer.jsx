import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getFetch } from "../datos/api";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
            getFetch
            .then(data => setProductos(data))
            .catch(error => console.log(error))
            .finally(() => console.log("finally"))
    }, []);


    return(
        <>
            <ItemList dataProductos={productos}/>
        </>
    )
}




export default ItemListContainer
