import React from 'react';
import ItemCount from '../ItemCount';


const ItemDetail = ({informacion}) => {

      
        return (
          <>
            <div className="card mb-3 containerDetalle">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={informacion.imagen} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{informacion.titulo}</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ea, laudantium aliquid esse aut officiis optio possimus, totam officia corporis voluptates.</p>
                    <p className="card-text">
                      <h4 className="">
                        {informacion.descripcion}
                      </h4>
                        <ItemCount initial={1} stock={5}/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
}

export default ItemDetail
