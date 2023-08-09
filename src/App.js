import './App.css';
import { ItemListContainer } from './components/ItemListContainet';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Saludos Visitante!"/>
    </>
  );
}

export default App;
