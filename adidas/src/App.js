import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import { useEffect } from 'react';
import { doc, getDoc, getFiresore } from 'firebase/firestore';

function App() {

  // useEffect(() => {
  //   const db = getFiresore();

  //   const docRef = doc(db, 'Items', 'TX0lwgxtmyvLvw0Jul1t');
  //   getDoc(docRef)
  //     .then((snapshot) => {
  //       if(snapshot.exists()) {
  //         console.log(snapshot.id);
  //         console.log(snapshot.data());
  //       }
  //     })
  //     .catch((error) => console.error(error));
  // }, [])
  return (
      <BrowserRouter>
        <CartProvider>
              <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />}/>
              <Route path='*' element={<ItemListContainer />}/>
            </Routes>
        </CartProvider>
      </BrowserRouter>
    );
}

export default App;