import { useEffect } from 'react'

import './App.css'
import HeroPage from './components/HeroPage';
import FlightClasses from './components/FlightClasses';
//import Testimonials from './components/Testimonials';
import AvailableFlights from "./components/AvailableFlights"
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    fetch("http://localhost:8081/users")
    .then(res => res.json())
    .then(data => console.log(data))
    .then(err => console.log(err));
  }, [])

  return (
    <>
      <div>
     <HeroPage/>
     <AvailableFlights/>
     <FlightClasses/>
     <Footer/>
    </div> 
    </>
  )
}

export default App
