import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer mensaje="Pagina en mantenimiento"/>
    </div>
  );
}

export default App;
