import './App.css'
import { ContextProvider } from './context/Context';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import Menu from "./pages/menu/menu";
import Cart from './pages/cart/cart';
import Footer from './components/footer';
import Booking from './components/booking';



const App = () => {
  return (
    <>
       <ContextProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ContextProvider>
    </>
  )
}

export default App;
