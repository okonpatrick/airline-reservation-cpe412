import { useEffect } from 'react'

import './App.css'
import HeroPage from './components/HeroPage';
import FlightClasses from './components/FlightClasses';
//import Testimonials from './components/Testimonials';
import AvailableFlights from "./components/AvailableFlights"
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import {Router, Routes, Route, useNavigate} from 'react-router-dom';
import FlightDashboard from './components/FlightDashboard';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignuP";


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
      <Routes>
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      <HeroPage/>

     <AvailableFlights/>

     <Routes>
          <Route path="/flights" element={<FlightDashboard />} />
        </Routes>
     <FlightClasses/>
     <Newsletter/>
     <Footer/>
    </div> 
    </>
  )
}

export default App

