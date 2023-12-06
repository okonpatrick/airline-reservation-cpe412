const app = require("./app");
const db = require("./models");

db.sequelize
  .sync({force: true})
  .then(() => {
    console.log("Database connection is successful");
  })
  .catch((err) => {
    console.log("Database connection not successful");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The app has started on port ${port}`);
});
