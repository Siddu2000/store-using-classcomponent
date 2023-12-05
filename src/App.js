
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Header/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
