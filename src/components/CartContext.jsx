//CREACION DEL CONTEXTO
import { useContext, useState, createContext } from "react";

export const CartContext = createContext([]);

//CREACION DEL COMPONENTE QUE MANEJA EL CONTEXTO

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {
    //ESTADOS Y FUNCIONES GLOBALES
    const [cartList, setcartList] = useState ([]);
    
    //AGREGA ITEMS AL CARRITO
    const agregarAlCarrito = (items) => {

        const indice = cartList.findIndex(i => i.id === items.id)
        
        if(indice > -1){
            const cantidadVieja = cartList[indice].cantidad
            let cantidadNueva = cantidadVieja + items.cantidad
            cartList[indice].cantidad = cantidadNueva
            let arrayNuevo = [...cartList]
            setcartList(arrayNuevo)

        } else {            
            setcartList([...cartList, items]);
        }
    }

    //ELIMINA TODOS LOS ITEMS DEL CARRITO
    const vaciarCarrito = () => {
        setcartList([]);
    }

    //ELIMINA UN ITEM DEL CARRITO
    const deleteItem = (id) => {
        const itemBorrado = cartList.filter((producto) => producto.id !== id)
        setcartList(itemBorrado);
    }

    //MONTO A PAGAR
    const totalPagar = () => {
        let count = 0;
        cartList.forEach((item) => {
            count += item.precio * item.cantidad;
        })
        return count;
    }

    //CANTIDAD DE ITEMS EN EL CARRITO
    const totalCarrito = () => {
        let count = 0;
        cartList.forEach((item) => {
            count += item.cantidad;
        })
        return count;
    }

    return(
        <CartContext.Provider value={{cartList, agregarAlCarrito, vaciarCarrito, deleteItem, totalPagar, totalCarrito}}>
            {children}
        </CartContext.Provider>
    )
}