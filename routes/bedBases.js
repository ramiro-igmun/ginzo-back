const bedBaseRouter = require('express').Router();
const BedBase = require('../models/bedBase');
const verifyToken = require('../utils/tokenVerifier');

bedBaseRouter.get('/', async (request, response) => {
  const bedBasees = await BedBase.find({});
  response.json(bedBasees.map((bedBase) => bedBase.toJSON()));
});

bedBaseRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const bedBase = await BedBase.findById(id);
  if (bedBase) {
    response.json(bedBase.toJSON());
  } else {
    response.status(404).end();
  }
});

bedBaseRouter.delete('/:id', async (request, response) => {
  const error = verifyToken(request);
  if (error) {
    response.status(401).json(error).end();
  }
  const { id } = request.params;
  const deletedBedBase = await BedBase.findByIdAndDelete(id);
  if (deletedBedBase) {
    response.status(204).end();
  } else {
    response.status(404).end();
  }
});

bedBaseRouter.put('/:id', async (request, response) => {
  const error = verifyToken(request);
  if (error) {
    response.status(401).json(error).end();
  }
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
  if (updatedbedBase) {
    response.json(updatedbedBase.toJSON());
  } else {
    response.status(404).end();
  }
});

module.exports = bedBaseRouter;
