const express = require('express');
const adventureRouter = express.Router({ mergeParams: true });
const Adventure = require('../models/adventure.js');

adventureRouter
  .route('/:outcomeId')
  .get(async (req, res) => {
    let outcomeId = req.params.outcomeId;
    let query = { outcomeId: outcomeId };
    let adventure = await Adventure.findOne(query);
    res.set({
      'Access-Control-Allow-Origin': '*'
    });
    res.status(200).json(adventure);
  });

module.exports = adventureRouter;