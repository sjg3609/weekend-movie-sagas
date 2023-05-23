const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT * FROM genres 
                     JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id" 
                     WHERE "movies_genres"."movie_id"=$1`;
  pool.query(queryText, [req.params.id]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error in GET for genres: ${error}`);
    res.sendStatus(500)
  })
  
});

module.exports = router;