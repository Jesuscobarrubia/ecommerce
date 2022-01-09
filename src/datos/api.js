class Producto {

    constructor(item){
        this.id = item.id;
        this.titulo = item.titulo;
        this.imagen = item.imagen;
        this.precio = item.precio;
        this.descripcion = item.descripcion;
    }

};

const PRODUCTOS = [
    new Producto ({id: "1", titulo: "REACT 1", imagen: "../react.png" ,precio: "100", descripcion: "Descripcion 1"}),
    new Producto ({id: "2", titulo: "REACT 2", imagen: "../react.png" ,precio: "150", descripcion: "Descripcion 2"}),
    new Producto ({id: "3", titulo: "REACT 3", imagen: "../react.png" , precio: "200", descripcion: "Descripcion 3"})
];

export const getFetch = new Promise((resolve, reject) => {

    let condicion = true;

        if(condicion){
            setTimeout(()=>{
                resolve(PRODUCTOS);
            }, 3000)
        }else{
            reject("Error");
        }
});
