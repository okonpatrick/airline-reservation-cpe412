const db = require("../models");

const AirportController = {
  getAllAirports: async (req, res) => {
    try {
      const airports = await db.Airport.findAll();
      res.status(200).json(airports);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getAirportByCode: async (req, res) => {
    const { code } = req.params;
    try {
      const airport = await db.Airport.findByPk(code);
      if (!airport) {
        res.status(404).json({ error: "Airport not found" });
        return;
      }
      res.status(200).json(airport);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createAirport: async (req, res) => {
    const { airportName, city, country } = req.body;
    try {
      const newAirport = await db.Airport.create({
        airportName,
        city,
        country,
      });
      res.status(201).json(newAirport);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateAirport: async (req, res) => {
    const { code } = req.params;
    const { airportName, city, country } = req.body;
    try {
      const airport = await db.Airport.findByPk(code);
      if (!airport) {
        res.status(404).json({ error: "Airport not found" });
        return;
      }
      await airport.update({ airportName, city, country });
      res.status(200).json(airport);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteAirport: async (req, res) => {
    const { code } = req.params;
    try {
      const airport = await db.Airport.findByPk(code);
      if (!airport) {
        res.status(404).json({ error: "Airport not found" });
        return;
      }
      await airport.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = AirportController;
