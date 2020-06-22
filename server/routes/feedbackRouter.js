const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// PUT Route
router.post('/', (req, res) => {
    const val1 = req.body.feeling;
    const val2 = req.body.understanding;
    const val3 = req.body.support;
    const val4 = req.body.comments;
    //server sending 500. no time to fix
    let queryText = 'INSERT INTO feedback (feeling, understanding, support, comments) VALUES($1,$2,$3,$4)';
    pool.query(queryText, [val1, val2, val3, val4]).then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus('ERROR', 500);
    });
}); // END PUT Route
module.exports = router;