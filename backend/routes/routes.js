const express = require("express");
const router = express.Router();

const PassengerController = require("../controllers/passengerController");
const FlightController = require("../controllers/flightController");
const AircraftController = require("../controllers/aircraftController");
const AirportController = require("../controllers/airportController");
const TicketController = require("../controllers/ticketController");

// Passenger routes
router.get("/passengers", PassengerController.getAllPassengers);
router.get("/passengers/:id", PassengerController.getPassengerById);
router.post("/passengers", PassengerController.createPassenger);
router.put("/passengers/:id", PassengerController.updatePassenger);
router.delete("/passengers/:id", PassengerController.deletePassenger);

// Flight routes
router.get("/flights", FlightController.getAllFlights);
router.get("/flights/:id", FlightController.getFlightById);
router.post("/flights", FlightController.createFlight);
router.put("/flights/:id", FlightController.updateFlight);
router.delete("/flights/:id", FlightController.deleteFlight);

// Aircraft routes
router.get("/aircraft", AircraftController.getAllAircraft);
router.get("/aircraft/:id", AircraftController.getAircraftById);
router.post("/aircraft", AircraftController.createAircraft);
router.put("/aircraft/:id", AircraftController.updateAircraft);
router.delete("/aircraft/:id", AircraftController.deleteAircraft);

// Airport routes
router.get("/airports", AirportController.getAllAirports);
router.get("/airports/:code", AirportController.getAirportByCode);
router.post("/airports", AirportController.createAirport);
router.put("/airports/:code", AirportController.updateAirport);
router.delete("/airports/:code", AirportController.deleteAirport);

// Ticket routes
router.get("/tickets", TicketController.getAllTickets);
router.get("/tickets/:id", TicketController.getTicketById);
router.post("/tickets", TicketController.createTicket);
router.put("/tickets/:id", TicketController.updateTicket);
router.delete("/tickets/:id", TicketController.deleteTicket);

module.exports = router;
