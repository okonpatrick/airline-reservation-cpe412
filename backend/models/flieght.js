module.exports = (sequelize, Sequelize) => {
  const Flieght = sequelize.define("Flieght", {
    title: {
      type: Sequelize.STRING,
    },
    food: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Flieght;
};
