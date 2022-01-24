import { useCartContext } from "../CartContext"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Cart = () => {

    const {cartList, vaciarCarrito, deleteItem, totalPagar} = useCartContext()
    const [vacio, setVacio] = useState(true)

    useEffect(() => {
       if(cartList.length > 0){
           setVacio(false)
       }else{
           setVacio(true)
       }

   }, [cartList]);
    
    return (
        <>
            {
                vacio? 
                <div>
                    <div class="container card cajaVacio">
                        <div class="card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-emoji-frown mb-2" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg>
                            <p class="card-text">¡El carrito está vacio!</p>
                            <Link to="/" class="btn btn-dark">Ve a la Tienda</Link>
                        </div>                    
                    </div>
                </div>
                :
                <>
                    {cartList.map(item =>

                    <ul className="list-group container mt-2">
                    <li className="list-group-item listaCarrito" key={item.id}>{item.titulo } 
                        <button onClick={() => deleteItem(item.id)} type="btn" className="btn delete">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-square">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </li>
                    <li className="list-group-item listaCarrito cantidadAgregada">Cantidad: {item.cantidad} - Precio: ${item.precio}</li>
                    </ul>
                    )}  

                    <div className="container d-flex justify-content-center mt-4">
                        <h3>Total: ${totalPagar()}</h3>
                        </div>
                        
                        <div className="container d-flex justify-content-center">
                        <button onClick={vaciarCarrito} className="btn btn-dark">Vaciar Carrito</button>
                    </div>  
                </>

            }
        </>

 
    )
}

export default Cart
 