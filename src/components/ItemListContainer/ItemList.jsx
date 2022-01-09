import Item from "./Item";

const ItemList = ({dataProductos}) => {     
    return(
        <section className="containerCard">
                {dataProductos.map((item) => (
                        <Item key={item.id} dataItem={item}/>
                    ))
                }
        </section>
    )
}

export default ItemList;
