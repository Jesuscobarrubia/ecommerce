import React from 'react'

const Inicio = () => {

    const logo = () =>{
        let video = document.getElementById("video");
        video.classList.add("d-none")

        let imagen = document.getElementById("imagen");
        imagen.classList.remove("d-none");
    }


    return (
        <div className='containerVideo'>
            <video src="./inicio/videoInicio.mp4" controls className='videoInicio' autoPlay onEnded={logo} id='video'></video> 
            <img src="./inicio/banner.jpg" alt="" className='d-none' id='imagen'/>  
        </div>
    )
}

export default Inicio
