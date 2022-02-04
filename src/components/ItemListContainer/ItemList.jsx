import Item from "./Item";

const ItemList = ({dataProductos}) => {  
    
    let datos = dataProductos
    datos.sort((a,b) => a.orden - b.orden)
    
    return(
        <section className="containerCard">
                {datos.map((item) => (
                        <Item key={item.id} dataItem={item}/>
                    ))
                }
        </section>
    )
}

export default ItemList;
