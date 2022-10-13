import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar>
            <CartWidget></CartWidget>
          </NavBar>
          <Routes>
            <Route path={'/Home'} element={<Home/>}></Route>
            <Route path={'/Shop'} element={<ItemListContainer/>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}



export default App;
