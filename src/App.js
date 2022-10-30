import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ListContainer from './components/ListContainer';
import ItemList from './components/ListContainer';
import ProductsProvider from './components/CartContext';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <BrowserRouter>
          <NavBar>
            <CartWidget></CartWidget>
          </NavBar>
          <Routes>
            <Route path={'/Home'} element={<Home/>}></Route>
            <Route path={'/Shop'} element={<ItemList/>}></Route>
            <Route path={'/firebase'} element={<ItemList/>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </ProductsProvider>
    </div>
  );
}



export default App;
