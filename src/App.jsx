import { HashRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Navbar/Cart";
import Inicio from "./components/Inicio/Inicio";
import { CartContextProvider } from "./components/CartContext";
import Orden from "./components/Orden";

const App = () => {
  return (
    <CartContextProvider>  
      <HashRouter>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Inicio/>}/>
            <Route exact path='/fase' element={<ItemListContainer/>}/>
            <Route exact path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
            <Route exact path='/fase/:idFase' element={<ItemListContainer/>}/>
            <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route exact path='/orden' element={<Orden/>}/>
          </Routes> 
      </HashRouter>
    </CartContextProvider>

  );
}

export default App;
