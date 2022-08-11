
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'
import { UserContextProvider} from './Context/UserContext'


function App() {
  return (
    <div className="App">
  <UserContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/inicio' element={<ItemListContainer greeting="AlainaStore" />}/>
          <Route exact path='/productos' element={<ItemListContainer greeting="Estamos filtrando" />} />
          <Route exact path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<h1>Cart</h1>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </UserContextProvider>
    </div>
  );
}

export default App;
