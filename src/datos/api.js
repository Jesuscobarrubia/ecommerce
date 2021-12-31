class Producto {

    constructor(item){
        this.id = item.id;
        this.titulo = item.titulo;
        this.imagen = item.imagen;
        this.precio = item.precio;
    }

};

const PRODUCTOS = [
    new Producto ({id: "1", titulo: "REACT 1", imagen: "../react.png" ,precio: "100", categoria:"perro"}),
    new Producto ({id: "2", titulo: "REACT 2", imagen: "../react.png" ,precio: "150", categoria:"gato"}),
    new Producto ({id: "3", titulo: "REACT 3", imagen: "../react.png" , precio: "200", categoria:"perro"})
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
