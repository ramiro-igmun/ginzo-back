const bedBaseRouter = require('express').Router();
const BedBase = require('../models/bedBase');

bedBaseRouter.get('/', async (request, response) => {
  const bedBasees = await BedBase.find({});
  response.json(bedBasees.map((bedBase) => bedBase.toJSON()));
});

bedBaseRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const bedBase = await BedBase.findById(id);
  response.json(bedBase.toJSON());
});

bedBaseRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  await BedBase.findByIdAndDelete(id);
  response.status(204).end();
});

bedBaseRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { body } = request;

  const updatedbedBase = await BedBase.findByIdAndUpdate(id, {
    name: body.name,
    description: body.description,
    price: body.price,
    outstanding: body.outstanding,
  },
  {
    new: true,
  });

  response.json(updatedbedBase.toJSON());
});

module.exports = bedBaseRouter;
