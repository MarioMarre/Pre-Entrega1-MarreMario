import react from "react";
import NavBar from "./componentes/header/NavBar"
import {CartWidget} from "./componentes/header/CartWidget";
import { ItemListContainer } from "./containers/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./containers/Cart";

const App = () => {
  const num = 5
  const greeting = "Bienvenido/a a la tienda NO ME OLVIDES"
  
  return (
    <>
      <BrowserRouter>
        <NavBar>
          <CartWidget numcart={num}/>
        </NavBar>
     
        <Routes>
          <Route path="/" element={<ItemListContainer greeting = {greeting}/>}/>
      
          <Route path="/nmo/:name"
            element={<ItemListContainer greeting = {greeting}></ItemListContainer>}
          />
      
          <Route path="products/:id"
           element={<ItemDetailContainer/>} 
          /> 
    
          <Route path="/nmo/cart" element={<Cart/>}/>

        </Routes>
        <ItemDetailContainer/>
      </BrowserRouter>
     
    </>
  )
};

export default App















/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi Proyecto
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hola Mundo
        </a>
      </header>
    </div>
  );
}

export default App;
 */