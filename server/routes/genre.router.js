const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT * FROM genres ORDER BY "id" ASC`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error in GET for genres: ${error}`);
    res.sendStatus(500)
  })
  
});

module.exports = router;