module.exports = (sequelize, Sequelize) => {
  const Airport = sequelize.define("Airport", {
    airportName: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
  });

  Airport.associate = (models) => {
    Airport.hasMany(models.Flight, { foreignKey: "departureAirportCode" });
    Airport.hasMany(models.Flight, { foreignKey: "arrivalAirportCode" });
  };

  return Airport;
};
