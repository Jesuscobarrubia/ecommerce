// import React from 'react'
// import { useState } from 'react'

// const ItemCount = ({stock, initial}) => {

//     const [count, setCount] = useState(initial);

//     //SUBE STOCK
//     const sube = () =>{
//         setCount(count + 1);
//     }
//     //BAJA STOCK
//     const baja = () =>{
//         setCount(count - 1);
//     }
    
//     //LIMITACION DE STOCK
//     if ( count == 0 ){
//         console.log("No puedes comprar menos de 0");
//         setCount(initial);
//     }else if ( count > stock ){
//         console.log("No puedes comprar más de " + stock);
//         setCount(stock);
//     }

//     return (
//         <>
//             <div className='containerCount'>
//                 <div class="d-grid gap-2 mt-3 contentCount">
//                     <input type="text" value={count} className='text-center'/>
//                     <button class="btn btn-primary" type="button" onClick={sube}>+</button>
//                     <button class="btn btn-primary" type="button" onClick={baja}>-</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ItemCount
