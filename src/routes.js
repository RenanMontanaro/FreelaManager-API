const express = require('express');
const routes = express.Router();


// JobController
const JobController = require('./controllers/JobController')

routes.get("/jobs", JobController.index);
routes.get("/jobs/:id", JobController.show);
routes.post("/jobs", JobController.store);
routes.put("/jobs/:id", JobController.update);
routes.delete("/jobs/:id", JobController.destroy);

// UserController
const UserController = require('./controllers/UserController')

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);


module.exports = routes;








