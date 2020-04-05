const mattressRouter = require('express').Router();
const Mattress = require('../models/mattress');
const verifyToken = require('../utils/tokenVerifier');

mattressRouter.get('/', async (request, response) => {
  const mattresses = await Mattress.find({});
  response.json(mattresses.map((mattress) => mattress.toJSON()));
});

mattressRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const mattress = await Mattress.findById(id);
  if (mattress) {
    response.json(mattress.toJSON());
  } else {
    response.status(404).end();
  }
});

mattressRouter.delete('/:id', async (request, response) => {
  const error = verifyToken(request);
  if (error) {
    response.status(401).json(error).end();
  }
  const { id } = request.params;
  const deletedMattress = await Mattress.findByIdAndDelete(id);
  if (deletedMattress) {
    response.status(204).end();
  } else {
    response.status(404).end();
  }
});

mattressRouter.put('/:id', async (request, response) => {
  const error = verifyToken(request);
  if (error) {
    response.status(401).json(error).end();
  }
  const { id } = request.params;
  const { body } = request;

  const updatedMattress = await Mattress.findByIdAndUpdate(id, {
    name: body.name,
    description: body.description,
    price: body.price,
    outstanding: body.outstanding,
  },
  {
    new: true,
  });
  if (updatedMattress) {
    response.json(updatedMattress.toJSON());
  } else {
    response.status(404).end();
  }
});

module.exports = mattressRouter;
