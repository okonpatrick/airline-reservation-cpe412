const db = require("../models");

const FlightController = {
  getAllFlights: async (req, res) => {
    try {
      const flights = await db.Flight.findAll();
      res.status(200).json(flights);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getFlightById: async (req, res) => {
    const { id } = req.params;
    try {
      const flight = await db.Flight.findByPk(id);
      if (!flight) {
        res.status(404).json({ error: "Flight not found" });
        return;
      }
      res.status(200).json(flight);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createFlight: async (req, res) => {
    const { departureDateTime, arrivalDateTime, aircraftId } = req.body;
    try {
      const newFlight = await db.Flight.create({
        departureDateTime,
        arrivalDateTime,
        aircraftId,
      });
      res.status(201).json(newFlight);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateFlight: async (req, res) => {
    const { id } = req.params;
    const { departureDateTime, arrivalDateTime, aircraftId } = req.body;
    try {
      const flight = await db.Flight.findByPk(id);
      if (!flight) {
        res.status(404).json({ error: "Flight not found" });
        return;
      }
      await flight.update({ departureDateTime, arrivalDateTime, aircraftId });
      res.status(200).json(flight);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteFlight: async (req, res) => {
    const { id } = req.params;
    try {
      const flight = await db.Flight.findByPk(id);
      if (!flight) {
        res.status(404).json({ error: "Flight not found" });
        return;
      }
      await flight.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = FlightController;
