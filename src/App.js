import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainet';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Saludos Visitante!"/>}></Route>
        <Route path='/category/:id' element={<ItemListContainer greeting="Saludos Visitante!"/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
