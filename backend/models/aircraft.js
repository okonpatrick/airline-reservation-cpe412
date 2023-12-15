module.exports = (sequelize, Sequelize) => {
  const Flight = sequelize.define("Flight", {
    departureDateTime: {
      type: Sequelize.DATE,
    },
    arrivalDateTime: {
      type: Sequelize.DATE,
    },
  });

  Flight.associate = (models) => {
    Flight.belongsTo(models.Aircraft);
    Flight.belongsTo(models.Airport, {
      as: "departureAirport",
      foreignKey: "departureAirportCode",
    });
    Flight.belongsTo(models.Airport, {
      as: "arrivalAirport",
      foreignKey: "arrivalAirportCode",
    });
    Flight.hasMany(models.Ticket);
  };

  return Flight;
};
