const mattressRouter = require('express').Router();
const Mattress = require('../models/mattress');

mattressRouter.get('/', async (request, response) => {
  const mattresses = await Mattress.find({});
  response.json(mattresses.map((mattress) => mattress.toJSON()));
});

module.exports = mattressRouter;
