
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <header className="App-header">

        <Navbar />
        <ItemListContainer show={show} setShow={setShow} greeting="AlainaStore"/>

      </header>
    </div>
  );
}

export default App;
