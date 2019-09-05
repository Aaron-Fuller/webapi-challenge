const express = 'express';
const db = require('../data/helpers/actionModel');
const router = require('express').Router();

router.get('/', (req, res) => {
    db.get()
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(err => {
        res.status(500).json({error: 'could not get action'});
    })
});

router.post('/', (req, res) => {
    //console.log(req.body);
    db.insert(req.body)
    .then(actions => {
        console.log(actions);
        res.status(201).json({message: 'Action create'});
    })
    .catch(err => {
        res.status(500).json({error: 'Missing elements'});
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.get(id)
    .then(actions => {
        console.log(actions);
        res.status(200).json({
            message: 'User by ID',
            actions
        })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'user not found'
        })
    })
  });

  router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error updating the action',
      });
    });
  });

  router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    .then(actions => {
        console.log(actions)
      res.status(200).json({ message: 'The action has been deleted' });
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error removing the action',
      });
    });
  });



module.exports = router;