import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HeroPage from './components/HeroPage';
import FlightClasses from './components/FlightClasses';
import AvailableFlights from './components/AvailableFlights';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import FlightDashboard from './components/FlightDashboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>
        {/* Common components outside of routes */}
        <HeroPage />
        <AvailableFlights />
        <Routes>
        <Route path="/flights" element={<FlightDashboard />} />
</Routes>
        <FlightClasses />
        <Newsletter />
        <Footer />

        {/* Define your routes */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
