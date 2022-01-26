import { Link } from "react-router-dom";

const Item = ({dataItem}) => {

    return(
        <div className="card">
            <img className="card-img-top" src={dataItem.img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{dataItem.titulo}</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae atque sed voluptatum delectus. Rerum aut facere quia a voluptatum quaerat.</p>
                    <h4 className="precio">${dataItem.precio}</h4>
                    
                    <Link to={`/detalle/${dataItem.id}`}>
                        <button className="btn btn-dark btnCompra">Detalle</button>
                    </Link>
                </div>
        </div>
    )
}

export default Item;