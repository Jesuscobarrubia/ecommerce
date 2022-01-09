import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
