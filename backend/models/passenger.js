module.exports = (sequelize, Sequelize) => {
  const Passenger = sequelize.define("Passenger", {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
  });

  Passenger.associate = (models) => {
    Passenger.hasMany(models.Ticket);
  };

  return Passenger;
};
