import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
              <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' />
              <Route path='*' element={<ItemListContainer />}/>
            </Routes>
        </CartProvider>
      </BrowserRouter>
    );
}

export default App;