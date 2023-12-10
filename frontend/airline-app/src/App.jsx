import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HeroPage from './components/HeroPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AvailableFlights from './components/AvailableFlights';
import FlightDashboard from './components/FlightDashboard';

const CombinedFlights = () => (
  <>
    <AvailableFlights />
    <FlightDashboard />
  </>
);

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
        <Routes>
        <Route path="/" element={<HeroPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/flights" element={<CombinedFlights />} />
          {/* <Route path="/flights/1" element={<CombinedFlights />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
