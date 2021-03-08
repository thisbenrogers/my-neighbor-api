const router = require('express').Router();

const { getOGLyrics, alterLyrics } = require('./lyrics-utils');

router.post('/', async (req, res) => {
  const { url } = req.body
  const ogLyrics = await getOGLyrics(url)
  const newLyrics = alterLyrics(ogLyrics.lyrics);
  if (ogLyrics.isSuccessful && newLyrics) {
    res.status(200).json(newLyrics)
  } else {
    res.status(400).json({
      message: "Invalid input, see errors",
      errors: ogLyrics.errors
    });
  }
})

module.exports = router;