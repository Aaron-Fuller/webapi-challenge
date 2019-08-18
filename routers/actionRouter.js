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




module.exports = router;