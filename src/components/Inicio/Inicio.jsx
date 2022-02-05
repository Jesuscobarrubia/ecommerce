import { useState } from 'react';

const Inicio = () => {
    const [show, setShow] = useState(true);

    const cambio = () => {
        setShow(false);
    }

    return (
        <div className='containerVideo'>
            {show ? 
            //TRUE
            <video src="/ecommerce/inicio/videoInicio.mp4" muted="muted" autoPlay controls className='videoInicio' onEnded={cambio}></video> 
            : 
            //FALSE
            <img src="/ecommerce/inicio/banner.jpg" alt="Banner"/>
            }
        </div>
    )
}

export default Inicio
