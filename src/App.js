import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainet';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './components/Cart';
import { About } from './components/About'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Hello Visitor!" />}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/category/:category' element={<ItemListContainer greeting="Hello Visitor!" />}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
