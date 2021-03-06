 import { useState, useEffect } from 'react'

 const ItemCount = ({stock, initial, onAdd}) => {

     const [count, setCount] = useState(initial);
     const [max, setMax] = useState(stock)
     const [botonActivoB, setBotonActivoB] = useState(true)
     const [botonActivoS, setBotonActivoS] = useState(true)

     //SUBE STOCK
     const sube = () =>{
         setCount(count + 1);
         setMax(max - 1);
         setBotonActivoB(true)
     }
     //BAJA STOCK
     const baja = () =>{
         setCount(count - 1);
         setMax(max + 1);
         setBotonActivoS(true)
     }
    
     //LIMITACION DE STOCK
    useEffect(() => {
        if ( count === 1 ){
            setBotonActivoB(false)
            
        }else if ( count > stock ){
            setBotonActivoS(false)
        }
    } , [stock, count])

     return (
         <>
            <div className='containerCount'>
                 <div className="gap-2 contentCount">
                     <button className="btn btn-dark" type="button" onClick={baja} disabled={!botonActivoB}>-</button>
                        <span className='text-center casillaCount'>{count}</span>
                     <button className="btn btn-dark" type="button" onClick={sube} disabled={!botonActivoS}>+</button>
                     <h6 className='mt-1'>Disponible - {max}</h6>
                 </div>
            </div>

            <button className='btn btn-dark btn-compra' type='button' onClick={() => onAdd (count)}>Agregar al Carrito</button>
         </>
     )
 }

 export default ItemCount
