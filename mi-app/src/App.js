
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'
import { UserContextProvider} from './Context/UserContext'
import { NotificationProvider} from './components/Notification/Notification'


function App() {
  return (
    <div className="App">
<NotificationProvider>
  <UserContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/inicio' element={<ItemListContainer greeting="AlainaStore" />}/>
          <Route exact path='/productos' element={<ItemListContainer greeting="Estamos filtrando" />} />
          <Route exact path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/Checkout' element={<Checkout />}/>
          <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
 </UserContextProvider>
</NotificationProvider>     
  
    </div>
  );
}

export default App;
