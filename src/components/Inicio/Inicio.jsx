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
            <video src="./inicio/videoInicio.mp4" autoPlay muted controls className='videoInicio' onEnded={cambio}></video> 
            : 
            //FALSE
            <img src="./inicio/banner.jpg" alt=""/>
            }
        </div>
    )
}

export default Inicio
