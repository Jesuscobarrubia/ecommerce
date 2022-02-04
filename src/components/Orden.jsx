import { getFirestore, collection, addDoc } from "firebase/firestore"
import swal from 'sweetalert';
import { useCartContext } from './CartContext';
import { Link } from "react-router-dom"
import { Formik } from 'formik';

const Orden = () => {

    const {cartList, totalPagar, vaciarCarrito} = useCartContext()

    return (
        <Formik
            initialValues={{
                nombre: '',
                email: '',
                telefono: '',
                checked: '',    
            }}

            validate={valores => {

                let errores = {};

                //VALIDACION NOMBRE
                if(!valores.nombre) {
                    errores.nombre = 'El nombre es obligatorio'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                    errores.nombre = 'El nombre debe contener solo letras'
                }

                //VALIDACION CORREO
                if(!valores.email) {
                    errores.email = 'El email es obligatorio'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                    errores.email = 'El email solo puede contener letras, numeros, puntos, guines'
                }

                //VALIDACION TELEFONO
                if(!valores.telefono) {
                    errores.telefono = 'El numero de telefono es obligatorio'
                } else if (!/^(\d{10})$/.test(valores.telefono)){
                    errores.telefono = 'El numero de telefono debe tener al menos 10 digitos'
                }

                //VALIDACION TERMINOS Y CONDICIONES
                if(!valores.checked) {
                    errores.checked = 'Debe estar de acuerdo con los terminos y condiciones'
                } 

                return errores;
            }}

            onSubmit={ (valores, {resetForm}) => {
                //GENERAR LA ORDEN            
                let orden = {}
                
                orden.buyer = valores
                orden.total = totalPagar()
                
                orden.items = cartList.map(item => {
                    const id = item.id;
                    const nombre = item.titulo;
                    const subtotal = item.precio * item.cantidad;
                    const cantidad = item.cantidad;    
            
                    return {id, nombre, subtotal, cantidad}
                })
        
                const dataBase = getFirestore();
                const odenColletion = collection(dataBase, 'ordenes'); 
                addDoc(odenColletion, orden)
                .then((resp) => {
                    swal({
                        title: "¡Tu compra ha sido confirmada!",
                        text: "Numero de orden: " + resp.id,
                        icon: "success",
                        button: "Finalizar",
                    });
                })
                .catch(err => console.log(err))
                setTimeout(() => {
                    resetForm()   
                    vaciarCarrito()        
                }, 2000);
            }
            }
        
        >
            {({handleSubmit, handleChange, values, handleBlur, errors, touched}) => (
                <form className="container" onSubmit={handleSubmit}>
                    <div className="form-group mt-2">
                        <label htmlFor="nombreApellido">Nombre y Apellido</label>
                        <input type="text" className="form-control mt-1" id="nombreApellido" onChange={handleChange}
                        onBlur={handleBlur} name="nombre" value={values.nombre}/>
                        {touched.nombre && errors.nombre && <p className="text-danger">{errors.nombre}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control mt-1" id="email"  onChange={handleChange} onBlur={handleBlur} name="email" value={values.email}/>
                        {touched.email && errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">Telefono</label>
                        <input type="number" className="form-control mt-1" id="telefono" onChange={handleChange} onBlur={handleBlur} name="telefono" value={values.telefono}/>
                        {touched.telefono && errors.telefono && <p className="text-danger">{errors.telefono}</p>}
                    </div>
                    <div className="form-check mt-3">
                        <label htmlFor="checked">Acepto los Terminos y Condiciones</label>
                        <input type="checkbox" className="form-check-input" id="checked" onChange={handleChange} onBlur={handleBlur} name="checked" value={values.checked}/>
                        {touched.checked && errors.checked && <p className="text-danger">{errors.checked}</p>}
                    </div>
                    <button type="submit" className="btn btn-dark mt-3">Generar Orden</button>
                    <Link to='/cart' className="btn btn-dark mt-3 modificarP">Modificar Pedido</Link>
                </form>

            )}
        </Formik>
  )
};

export default Orden;
