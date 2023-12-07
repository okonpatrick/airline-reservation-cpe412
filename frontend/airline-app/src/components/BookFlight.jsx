
export default function BookFlight() {
  function sendBookingData() {
    //logic to send all details to db
  }
  return (
    <div>
      <div className="p-12">
        <button className="p-5 w-sm hover:shadow-htmlForm rounded-md bg-orange-500 py-3 px-10 text-center text-base font-semibold text-white outline-none"
       onClick={sendBookingData}>
          Pay
        </button>
        </div>
    </div>
  )
}
