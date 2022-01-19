class Producto {

    constructor(item){
        this.id = item.id;
        this.titulo = item.titulo;
        this.imagen = item.imagen;
        this.precio = item.precio;
        this.categoria = item.categoria;
        this.fase = item.fase;
        this.descripcion = item.descripcion;
    }

};

const PRODUCTOS = [

    /* FASE UNO  */
    new Producto ({id: "1", titulo: "Iron Man", imagen: "../faseuno/1.png" ,precio: "100", fase: "FaseUno" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "2", titulo: "Iron Man 2", imagen: "../faseuno/2.jpg" ,precio: "150", fase: "FaseUno" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "3", titulo: "Thor", imagen: "../faseuno/3.jpg" , precio: "200", fase: "FaseUno" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "4", titulo: "Capitan America - El Primer Vengador", imagen: "../faseuno/4.jpg" , precio: "200", descripcion: "FaseUno" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "5", titulo: "Los Vengadores", imagen: "../faseuno/5.jpg" , precio: "200", fase: "FaseUno" , categoria: "pelicula" , descripcion: "Entradas"}),

    /* FASE DOS  */
    new Producto ({id: "6", titulo: "Iron Man 3", imagen: "../fasedos/6.jpg" ,precio: "100", fase: "FaseDos" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "7", titulo: "Thor - Un mundo oscuro", imagen: "../fasedos/7.jpg" ,precio: "150", fase: "FaseDos" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "8", titulo: "Guardianes de la Galaxia", imagen: "../fasedos/8.jpg" , precio: "200", fase: "FaseDos" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "9", titulo: "Capitan America y el Soldado de Invierno", imagen: "../fasedos/9.png" , precio: "200", fase: "FaseDos" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "10", titulo: "Los Vengadores - La Era de Ultron", imagen: "../fasedos/10.png" , precio: "200", fase: "FaseDos" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "11", titulo: "Ant-Man", imagen: "../fasedos/11.jpg" , precio: "200", fase: "FaseDos" , categoria: "pelicula" , descripcion: "Entradas"}),

    /* FASE TRES  */
    new Producto ({id: "12", titulo: "Capitan America - Civil War", imagen: "../fasetres/12.png" ,precio: "100", fase: "FaseTres" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "13", titulo: "Doctor Strange - El Hechicero Supremo", imagen: "../fasetres/13.jpg" ,precio: "150", fase: "FaseTres" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "14", titulo: "Guardianes de la Galaxia - Vol. 2", imagen: "../fasetres/14.png" , precio: "200", fase: "FaseTres" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "15", titulo: "Spiderman - De regreso a Casa", imagen: "../fasetres/15.jpg" , precio: "200", fase: "FaseTres" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "16", titulo: "Thor Ragnarok", imagen: "../fasetres/16.png" , precio: "200", fase: "FaseTres" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "17", titulo: "Pantera Negra", imagen: "../fasetres/17.jpg" , precio: "200", fase: "FaseTres" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "18", titulo: "Los Vengadores - Infinity War", imagen: "../fasetres/18.png" , precio: "200", fase: "FaseTres" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "19", titulo: "Ant-Man y La Avispa", imagen: "../fasetres/19.png" , precio: "200", fase: "FaseTres" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "20", titulo: "Capitana Marvel", imagen: "../fasetres/20.png" , precio: "200", fase: "FaseTres" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "21", titulo: "Los Vengadores - End Game", imagen: "../fasetres/21.jpg" , precio: "200", fase: "FaseTres" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "22", titulo: "Spiderman - Lejos de Casa", imagen: "../fasetres/22.png" , precio: "200", fase: "FaseTres" , categoria: "pelicula" , descripcion: "Entradas"}),

    /* FASE CUATRO  */
    new Producto ({id: "23", titulo: "WandaVision", imagen: "../fasecuatro/23.png" ,precio: "100", fase: "FaseCuatro" , categoria: "serie" , descripcion: "Suscripción por mes"}),
    new Producto ({id: "24", titulo: "Falcon y el Soldado de Invierno", imagen: "../fasecuatro/24.jpg" ,precio: "150", fase: "FaseCuatro" , categoria: "pelicula" , descripcion: "Suscripción por mes"}),
    new Producto ({id: "25", titulo: "Loki", imagen: "../fasecuatro/25.jpg" , precio: "200", fase: "FaseCuatro" , categoria: "serie" , descripcion: "Suscripción por mes"}),
    new Producto ({id: "26", titulo: "Viuda Negra", imagen: "../fasecuatro/26.jpg" , precio: "200", fase: "FaseCuatro" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "27", titulo: "What if...?", imagen: "../fasecuatro/27.png" , precio: "200", fase: "FaseCuatro" , categoria: "serie" , descripcion: "Suscripción por mes"}),
    new Producto ({id: "28", titulo: "Shang Chi", imagen: "../fasecuatro/28.png" , precio: "200", fase: "FaseCuatro" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "29", titulo: "Eternos", imagen: "../fasecuatro/29.jpg" , precio: "200", fase: "FaseCuatro" , categoria: "pelicula" , descripcion: "Entradas"}),
    new Producto ({id: "30", titulo: "Ojo de Halcón", imagen: "../fasecuatro/30.jpg" , precio: "200", fase: "FaseCuatro" , categoria: "serie" , descripcion: "Suscripción por mes"}),
    new Producto ({id: "31", titulo: "Spiderman - Sin Camino a Casa", imagen: "../fasecuatro/31.jpg" , precio: "200", fase: "FaseCuatro" , categoria: "pelicula" , descripcion: "Entradas"}),



];

export const getFetch = new Promise((resolve, reject) => {

    let condicion = true;

        if(condicion){
            setTimeout(()=>{
                resolve(PRODUCTOS);
            }, 2000)
        }else{
            reject("Error");
        }
});
