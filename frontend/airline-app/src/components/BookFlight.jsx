
export default function BookFlight() {
  function sendBookingData() {
    //logic to send all details to db
   // window.location.href = 'https://paystack.com/pay/v9be1zf179';
    window.location.href = 'http://localhost:5173/signin'; // Replace with the actual URL
    // Replace with the actual URL

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
