const express = require('express');
const adventureRouter = express.Router({ mergeParams: true });
const Adventure = require('../models/adventure.js');

adventureRouter
  .route('/:outcome_id')
  .get(async (req, res) => {
    let id = req.params.outcome_id;
    let query = { id: id };
    let adventure = await Adventure.findOne(query);
    res.set({
      'Access-Control-Allow-Origin': '*'
    });
    res.status(200).json(adventure);
  });

module.exports = adventureRouter;