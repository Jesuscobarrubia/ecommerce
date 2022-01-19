import { prettyDOM } from "@testing-library/react"
import { useCartContext } from "../CartContext"


const Cart = () => {

    const {cartList, vaciarCarrito} = useCartContext()
    return (
        <div>
            {cartList.map(item =>

                <ul className="list-group container mt-2">
                    <li className="list-group-item listaCarrito" key={item.id}>{item.titulo }</li>
                    <li className="list-group-item listaCarrito cantidadAgregada">Cantidad: {item.cantidad}</li>
                </ul>
            )}

            <div className="container d-flex justify-content-center">
                <button onClick={vaciarCarrito} className="btn btn-dark mt-5">Vaciar Carrito</button>
            </div>
            
        </div>
    )
}

export default Cart
