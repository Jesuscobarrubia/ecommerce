import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Navbar/Cart";
import Inicio from "./components/Inicio/Inicio";


const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route exact path='/inicio' element={<Inicio/>}/>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route exact path='/fase/:idFase' element={<ItemListContainer/>}/>
          <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
