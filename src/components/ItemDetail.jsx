import React from 'react';
import { useEffect } from 'react';


function ItemDetail({informacion}) {

      
        return (
          <>
            <div class="card text-dark bg-white mb-3">
                <div class="card-header">{informacion.id}</div>
                <div class="card-body">
                <h5 class="card-title">{informacion.titulo}</h5>
                <p class="card-text">{informacion.descripcion}</p>
                </div>
            </div>
          </>
        );
}

export default ItemDetail
