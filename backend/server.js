const app = require("./app");
const db = require("./models");

const port = process.env.PORT || 3000;

// Sync database and start server
db.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
