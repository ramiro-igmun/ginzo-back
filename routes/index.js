const homeRouter = require('express').Router();
const BedBase = require('../models/bedBase');
const Mattress = require('../models/mattress');

homeRouter.get('/', async (request, response) => {
  const bedBases = await BedBase.find({ outstanding: true });
  const mattresses = await Mattress.find({ outstanding: true });

  response.json(bedBases.concat(mattresses).map((item) => item.toJSON()));
});

module.exports = homeRouter;
