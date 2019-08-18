
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


module.exports = router;