**Passenger Controller (controllers/passengerController.js):**

- **GET /passengers:** Retrieve a list of all passengers.
- **GET /passengers/:id:** Retrieve details of a specific passenger.
- **POST /passengers:** Create a new passenger.
- **PUT /passengers/:id:** Update details of a specific passenger.
- **DELETE /passengers/:id:** Delete a specific passenger.

**Flight Controller (controllers/flightController.js):**

- **GET /flights:** Retrieve a list of all flights.
- **GET /flights/:id:** Retrieve details of a specific flight.
- **POST /flights:** Create a new flight.
- **PUT /flights/:id:** Update details of a specific flight.
- **DELETE /flights/:id:** Delete a specific flight.

**Aircraft Controller (controllers/aircraftController.js):**

- **GET /aircraft:** Retrieve a list of all aircraft.
- **GET /aircraft/:id:** Retrieve details of a specific aircraft.
- **POST /aircraft:** Create a new aircraft.
- **PUT /aircraft/:id:** Update details of a specific aircraft.
- **DELETE /aircraft/:id:** Delete a specific aircraft.

**Airport Controller (controllers/airportController.js):**

- **GET /airports:** Retrieve a list of all airports.
- **GET /airports/:code:** Retrieve details of a specific airport.
- **POST /airports:** Create a new airport.
- **PUT /airports/:code:** Update details of a specific airport.
- **DELETE /airports/:code:** Delete a specific airport.

**Ticket Controller (controllers/ticketController.js):**

- **GET /tickets:** Retrieve a list of all tickets.
- **GET /tickets/:id:** Retrieve details of a specific ticket.
- **POST /tickets:** Create a new ticket.
- **PUT /tickets/:id:** Update details of a specific ticket.
- **DELETE /tickets/:id:** Delete a specific ticket.

**App Flow:**

- Clients interact with the API using HTTP requests (GET, POST, PUT, DELETE) to the corresponding endpoints.
- Controllers handle the incoming requests, process data (if necessary), and interact with the Sequelize models.
- Models represent the database entities and handle the actual database interactions through Sequelize.
- The database schema enforces data integrity, relationships, and constraints.
- Sequelize ORM takes care of translating JavaScript code to SQL queries and vice versa.
- Responses are sent back to clients with the appropriate status codes and data.
