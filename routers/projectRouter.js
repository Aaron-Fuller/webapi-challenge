
const express = require('express');
const db = require('../data/helpers/projectModel.js');
const router = express.Router();

router.get('/', (req, res) => {
    db.get()
        .then(projects => {
            console.log(projects);
            res.status(200).json(projects);
        } )
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: 'error'
            })
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.get(id)
    .then(projects => {
        console.log(projects);
        res.status(200).json({
            message: 'Projects',
            action
        })

    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Error'
        })
    })
  });

  router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error updating the project',
      })
    });
  });

  router.post('/', (req, res) => {
    db.insert(req.body)
    .then(projects => {
        console.log(projects);
        res.status(201).json({
            message: 'project created'
        })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            err: 'error'
        })
    })
});

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    .then(projects => {
        console.log(projects)
      res.status(200).json({ message: 'The project has been destroyed' });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error removing the project',
      })
    })
  });

module.exports = router;