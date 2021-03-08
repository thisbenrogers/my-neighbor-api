const router = require('express').Router();

const searchGenius = require('./search-utils');

router.post('/', async (req, res) => {
  const { title, artist } = req.body
  const searchArray = await searchGenius({
    title: title,
    artist: artist
  })
  if (searchArray.isSuccessful) {
    res.status(200).json(searchArray.searchResults)
  } else {
    res.status(400).json({
      message: "Invalid Input, see errors",
      errors: searchArray.errors
    });
  }
})

module.exports = router;