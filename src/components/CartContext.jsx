//CREACION DEL CONTEXTO
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

//CREACION DEL COMPONENTE QUE MANEJA EL CONTEXTO

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {
    //ESTADOS Y FUNCIONES GLOBALES
    const [cartList, setcartList] = useState ([]);


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

    const vaciarCarrito = () => {
        setcartList([]);
    }

    const deleteItem = (id) => {
        const itemBorrado = cartList.filter((producto) => producto.id !== id)
        setcartList(itemBorrado);
    }

    const totalPagar = () => {
        let count = 0;
        cartList.forEach((item) => {
            count += item.precio * item.cantidad;
        })
        return count;
    }

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