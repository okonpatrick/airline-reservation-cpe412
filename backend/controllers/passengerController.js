const db = require("../models");

const PassengerController = {
  getAllPassengers: async (req, res) => {
    try {
      const passengers = await db.Passenger.findAll();
      res.status(200).json(passengers);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getPassengerById: async (req, res) => {
    const { id } = req.params;
    try {
      const passenger = await db.Passenger.findByPk(id);
      if (!passenger) {
        res.status(404).json({ error: "Passenger not found" });
        return;
      }
      res.status(200).json(passenger);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createPassenger: async (req, res) => {
    const { firstName, lastName, email, phone } = req.body;
    try {
      const newPassenger = await db.Passenger.create({
        firstName,
        lastName,
        email,
        phone,
      });
      res.status(201).json(newPassenger);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updatePassenger: async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, phone } = req.body;
    try {
      const passenger = await db.Passenger.findByPk(id);
      if (!passenger) {
        res.status(404).json({ error: "Passenger not found" });
        return;
      }
      await passenger.update({ firstName, lastName, email, phone });
      res.status(200).json(passenger);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deletePassenger: async (req, res) => {
    const { id } = req.params;
    try {
      const passenger = await db.Passenger.findByPk(id);
      if (!passenger) {
        res.status(404).json({ error: "Passenger not found" });
        return;
      }
      await passenger.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = PassengerController;
