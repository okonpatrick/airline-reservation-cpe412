const dbConfig = require("./config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operationsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.Passenger = require("./passenger.js")(sequelize, Sequelize);
db.Flight = require("./flight.js")(sequelize, Sequelize);
db.Aircraft = require("./aircraft.js")(sequelize, Sequelize);
db.Airport = require("./airport.js")(sequelize, Sequelize);
db.Ticket = require("./ticket.js")(sequelize, Sequelize);

module.exports = db;
