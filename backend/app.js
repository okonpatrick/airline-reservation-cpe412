const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require("swagger-ui-express");

const routes = require("./routes/routes");

app.use(cors());

// import doc
const swaggerDoc = require("./docs.json");

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
