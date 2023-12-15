const db = require("../models");

const AircraftController = {
  getAllAircraft: async (req, res) => {
    try {
      const aircraft = await db.Aircraft.findAll();
      res.status(200).json(aircraft);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getAircraftById: async (req, res) => {
    const { id } = req.params;
    try {
      const aircraft = await db.Aircraft.findByPk(id);
      if (!aircraft) {
        res.status(404).json({ error: "Aircraft not found" });
        return;
      }
      res.status(200).json(aircraft);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createAircraft: async (req, res) => {
    const { aircraftType, manufacturer, model } = req.body;
    try {
      const newAircraft = await db.Aircraft.create({
        aircraftType,
        manufacturer,
        model,
      });
      res.status(201).json(newAircraft);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateAircraft: async (req, res) => {
    const { id } = req.params;
    const { aircraftType, manufacturer, model } = req.body;
    try {
      const aircraft = await db.Aircraft.findByPk(id);
      if (!aircraft) {
        res.status(404).json({ error: "Aircraft not found" });
        return;
      }
      await aircraft.update({ aircraftType, manufacturer, model });
      res.status(200).json(aircraft);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteAircraft: async (req, res) => {
    const { id } = req.params;
    try {
      const aircraft = await db.Aircraft.findByPk(id);
      if (!aircraft) {
        res.status(404).json({ error: "Aircraft not found" });
        return;
      }
      await aircraft.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = AircraftController;
