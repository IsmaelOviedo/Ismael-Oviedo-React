
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting="Alaina Store" />}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer greeting="Estamos filtrando" />} />
          <Route exact path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>


        

      
    </div>
  );
}

export default App;
