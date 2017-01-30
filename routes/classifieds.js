'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

// Grabs all of the classifieds information.
router.get('/', (req, res, next) => {
  knex('classifieds')
    .then(results => {
      for (let i = 0; i < results.length; i++) {
        delete results[i].created_at;
        delete results[i].updated_at;
      }
      res.status(200).send(results);
    })
    .catch(err => {
      next(err);
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  knex('classifieds')
    .where('classifieds.id', id)
    .first()
    .then(result => {
      if (!result) {
        return res.status(404).send('Not found!');
      }
      delete result.created_at;
      delete result.updated_at;
      res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  const { title, description, price, item_image } = req.body;
  const newClassified = { title, description, price, item_image };

  knex('classifieds')
    .insert(newClassified, ['id', 'title', 'description', 'price', 'item_image'])
    .then(result => {
      res.status(200).send(result[0]);
    })
    .catch(err => {
      next(err);
    });
});

router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  const { title, description, price, item_image } = req.body;
  const changedClassified = { title, description, price, item_image };

  knex('classifieds')
    .where('classifieds.id', id)
    .update(changedClassified, ['id', 'title', 'description', 'price', 'item_image'])
    .then(result => {
      res.status(200).send(result[0]);
    })
    .catch(err => {
      next(err);
    });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  knex('classifieds')
    .where('classifieds.id', id)
    .del(['id', 'title', 'description', 'price', 'item_image'])
    .then(result => {
      res.status(200).send(result[0]);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
