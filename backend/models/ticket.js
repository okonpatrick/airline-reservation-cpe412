module.exports = (sequelize, Sequelize) => {
  const Ticket = sequelize.define("Ticket", {
    seatNumber: {
      type: Sequelize.STRING,
    },
    ticketClass: {
      type: Sequelize.STRING,
    },
  });

  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Passenger);
    Ticket.belongsTo(models.Flight);
  };

  return Ticket;
};
