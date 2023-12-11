import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
export default function AvailableFlights() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [infants, setInfants] = useState('');

  const navigate = useNavigate();

  const navigateToFlights = (event) => {
    event.preventDefault();
    
    // 👇️ navigate to /flights
    navigate('/flights/');
    //window.location.href = 'http://localhost:5173/flights/1'; // Replace with the actual URL

    console.log('From:', from);
    console.log('To:', to);
    console.log('Date:', date);
    console.log('Adults:', adults);
    console.log('Children:', children);
    console.log('Infants:', infants);

  };

  return (
    <div>
    <form>
    <div className="p-10 font-bold text-xl bg-orange-500 text-white"><button className="p-2">BOOK A FLIGHT</button><button className="p-2">MANAGE BOOKING</button><button className="p-2">CHECK-IN</button></div>

    <div className="p-12 flex">

      <form className="pr-10 mr-10">
  <label htmlFor="countries" className="block text-sm font-medium text-black-700 dark:text-white"> From</label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
   value={from}
        onChange={(e) => setFrom(e.target.value)}>

    <option>United States</option>
    <option>South Africa</option>
    <option>Canada</option>
    <option>France</option>
    <option>Ghana</option>
    <option>Germany</option>
  </select>
</form>

<form className="block mb-2 text-sm font-medium text-black-700 dark:text-white"> <button>To</button>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
   value={to}
        onChange={(e) => setTo(e.target.value)}>
  <option>Nigeria </option>
    <option>Ghana </option>
    <option>South Africa</option>
    <option>Canada</option>
    <option>France</option>
    <option>United States</option>
    <option>Germany</option>
  </select>
</form>
      <div className="pl-10 ml-10">
            <label
              htmlFor="date"
              className=" block text-base font-medium text-[#07074D]"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className=" rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
           required 
           value={date}
        onChange={(e) => setDate(e.target.value)}
           />
          </div>

</div>

<div className="pl-12 pr-10 mr-5 flex">
<div className="pr-24">
<form className="block mb-2 text-sm font-medium text-black-700 dark:text-white">
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
   value={adults}
        onChange={(e) => setAdults(e.target.value)}>

    <option>0 Adult</option>
    <option>1 Adult</option>
    <option>2 Adults</option>
    <option>3 Adults</option>
    <option>4 Adults</option>
    <option>5 Adults</option>
    <option>6 Adults</option>
    <option>7 Adults</option>
    <option>8 Adults</option>

  </select>
</form>
</div>

<form className="block mb-2 text-sm font-medium text-black-700 dark:text-white">
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
   value={children}
        onChange={(e) => setChildren(e.target.value)}>

    <option>0 Child</option>
    <option>1 Child</option>
    <option>2 Children</option>
    <option>3 Children</option>
    <option>4 Children</option>
    <option>5 Children</option>
  </select>
</form>
<div className="pl-14 mx-10">
<form className="block mb-2 text-sm font-medium text-black-700 dark:text-white">
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
   value={infants}
        onChange={(e) => setInfants(e.target.value)}>

    <option>0 Infant</option>
    <option>1 Infant</option>
    <option>2 Infants</option>
    <option>3 Infants</option>
    <option>4 Infants</option>
    <option>5 Infants</option>
  </select>
</form>
</div>
</div>

<div>

</div>
<div className="p-12">
        <button className="p-5 w-sm hover:shadow-htmlForm rounded-md bg-orange-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
       onClick={navigateToFlights}
       type='submit'>
          Continue
        </button>
        </div>
        </form>
      </div>
  
  );
} 
