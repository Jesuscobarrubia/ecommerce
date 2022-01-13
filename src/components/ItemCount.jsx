 import React from 'react'
 import { useState } from 'react'

 const ItemCount = ({stock, initial, onAdd}) => {

     const [count, setCount] = useState(initial);

     //SUBE STOCK
     const sube = () =>{
         setCount(count + 1);
     }
     //BAJA STOCK
     const baja = () =>{
         setCount(count - 1);
     }
    
     //LIMITACION DE STOCK
     if ( count == 0 ){
         console.log("No puedes comprar menos de 0");
         setCount(initial);
     }else if ( count > stock ){
         console.log("No puedes comprar más de " + stock);
         setCount(stock);
     }

     return (
         <>
            <div className='containerCount'>
                 <div className="gap-2 contentCount">
                     <button className="btn btn-dark" type="button" onClick={baja}>-</button>
                     <input type="text" value={count} className='text-center'/>
                     <button className="btn btn-dark" type="button" onClick={sube}>+</button>
                 </div>
            </div>

            <button className='btn btn-dark btn-compra' type='button' onClick={onAdd}>Agregar al Carrito</button>
         </>
     )
 }

 export default ItemCount
