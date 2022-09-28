import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <div className="App">
      <NavBar>
        <CartWidget></CartWidget>
      </NavBar>
      
    </div>
  );
}



export default App;
