export default function AvailableFlights() {
  return (
    <div>
    <div className="p-10 font-bold text-xl bg-orange-500 text-white"><button className="p-2">BOOK A FLIGHT</button><button className="p-2">MANAGE BOOKING</button><button className="p-2">CHECK-IN</button></div>

    <div className="p-12 flex">

      <form className="pr-10 mr-10">
  <label htmlFor="countries" className="block text-sm font-medium text-black-700 dark:text-white"> From</label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option>United States</option>
    <option>South Africa</option>
    <option>Canada</option>
    <option>France</option>
    <option>Ghana</option>
    <option>Germany</option>
  </select>
</form>

<form className="block mb-2 text-sm font-medium text-black-700 dark:text-white"> <button>To</button>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option>United States</option>
    <option>South Africa</option>
    <option>Canada</option>
    <option>France</option>
    <option>Ghana</option>
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
            />
          </div>

</div>

<div className="pl-12 pr-10 mr-5 flex">
<form className="block mb-2 text-sm font-medium text-black-700 dark:text-white">
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

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
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

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
        <button className="p-5 w-sm hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Continue
        </button>
        </div>
      </div>
  
  );
}
