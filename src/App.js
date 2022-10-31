import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ListContainer from './components/ListContainer';
import ItemList from './components/ListContainer';
import ProductsProvider from './components/CartContext';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import { FaShoppingCart } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <BrowserRouter>
          <NavBar>
            <CartWidget></CartWidget>
          </NavBar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path={'/Home'} element={<Home/>}></Route>
            <Route path={'/Shop'} element={<ItemList/>}></Route>
            <Route path={'/itemdetail/:id'} element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart/>} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </ProductsProvider>
    </div>
  );
}



export default App;
