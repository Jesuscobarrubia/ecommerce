import { useState } from 'react';

const Inicio = () => {
    const [show, setShow] = useState(true);

    const cambio = () => {
        setShow(false);
    }


    return (
        <div className='containerVideo'>
            {show ? 

            <video src="./inicio/videoInicio.mp4" controls className='videoInicio' autoPlay onEnded={cambio}></video> 

            : 

            <img src="./inicio/banner.jpg" alt=""/>
            }
        </div>
    )
}

export default Inicio
