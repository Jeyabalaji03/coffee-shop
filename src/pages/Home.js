import { Button } from 'react-bootstrap'
import { FaCoffee } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import About from './About'
import { Service } from './service/service';
import Offer from '../components/offer';
import Flavours from '../components/flavours';

const Home = () => {

  const Navigate = useNavigate();

  return (
    <>
      <div id="home">
        <div className='home-img'></div>
        <div className='home-content text-center'>
          <h1>rest <span><FaCoffee /></span> relax <span><FaCoffee /></span> revive</h1>
          <p>time to Discover the perfect blend</p>
          <Button variant="secondary" onClick={() => Navigate("/menu")}> See our Menu </Button>
        </div>
      </div>
      <About />
      <Flavours />
      <Offer />
      <Service />
    </>
  )
}

export default Home;