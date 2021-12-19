import React from 'react'

const ItemListContainer = (props) => {

    const alerta = () => {
        alert(props.mensaje)
    }
    
    return (
        <>
            <button className='btn btn-dark mt-5' onClick={alerta}>Información Acá</button>           
        </>
    )

}



export default ItemListContainer
