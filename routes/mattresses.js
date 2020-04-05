const mattressRouter = require('express').Router();
const Mattress = require('../models/mattress');

mattressRouter.get('/', async (request, response) => {
  const mattresses = await Mattress.find({});
  response.json(mattresses.map((mattress) => mattress.toJSON()));
});

mattressRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const mattress = await Mattress.findById(id);
  response.json(mattress.toJSON());
});

mattressRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  await Mattress.findByIdAndDelete(id);
  response.status(204).end();
});

mattressRouter.put('/:id', async (request, response) => {
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

  response.json(updatedMattress.toJSON());
});

module.exports = mattressRouter;
