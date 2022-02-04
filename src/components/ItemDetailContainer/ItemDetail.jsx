import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import ItemCount from '../ItemCount';

const ItemDetail = ({informacion}) => {

  const {agregarAlCarrito} = useCartContext()

  const [show, setShow] = useState(true);

  const onAdd = (count) => {
    setShow(false);
    agregarAlCarrito({...informacion, cantidad : count});
  }
      
        return (
          <>
            <div className="card mb-3 containerDetalle">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={informacion.img} alt={informacion.titulo} className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{informacion.titulo}</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ea, laudantium aliquid esse aut officiis optio possimus, totam officia corporis voluptates.</p>
                    <div className="card-text">
                      <h4 className="">
                        {informacion.descripcion}
                      </h4>
                      <h4 className='precio'>${informacion.precio}</h4>


                      {show ? 
                      //TRUE
                      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                      : 
                      //FALSE
                      <div className='endContinue'>
                        <Link to='/cart'><button className='btn btn-dark btn-compra' type='button'>Terminar la Compra</button></Link>
                        <Link to='/fase'><button className='btn btn-dark btn-compra' type='button'>Seguir Comprando</button></Link>
                      </div>}                                              
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
}

export default ItemDetail
