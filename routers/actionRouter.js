const express = 'express';
const db = require('../data/helpers/actionModel');
const router = require('express').Router();

router.get('/', (req, res) => {
    db.get()
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(err => {
        res.status(500).json({error: 'could not get action'})
    })
});

module.exports = router;