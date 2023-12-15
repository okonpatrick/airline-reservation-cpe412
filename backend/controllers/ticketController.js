const db = require("../models");

const TicketController = {
  getAllTickets: async (req, res) => {
    try {
      const tickets = await db.Ticket.findAll();
      res.status(200).json(tickets);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getTicketById: async (req, res) => {
    const { id } = req.params;
    try {
      const ticket = await db.Ticket.findByPk(id);
      if (!ticket) {
        res.status(404).json({ error: "Ticket not found" });
        return;
      }
      res.status(200).json(ticket);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createTicket: async (req, res) => {
    const { seatNumber, ticketClass, passengerId, flightId } = req.body;
    try {
      const newTicket = await db.Ticket.create({
        seatNumber,
        ticketClass,
        passengerId,
        flightId,
      });
      res.status(201).json(newTicket);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateTicket: async (req, res) => {
    const { id } = req.params;
    const { seatNumber, ticketClass, passengerId, flightId } = req.body;
    try {
      const ticket = await db.Ticket.findByPk(id);
      if (!ticket) {
        res.status(404).json({ error: "Ticket not found" });
        return;
      }
      await ticket.update({ seatNumber, ticketClass, passengerId, flightId });
      res.status(200).json(ticket);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteTicket: async (req, res) => {
    const { id } = req.params;
    try {
      const ticket = await db.Ticket.findByPk(id);
      if (!ticket) {
        res.status(404).json({ error: "Ticket not found" });
        return;
      }
      await ticket.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = TicketController;
