const { searchSong } = require('genius-lyrics-api');

/**
 * @param {Object} searchObj - An object with search values
 * @param {string} searchObj.title - title of song
 * @param {string} searchObj.artist - name of performing artist
 * 
 * @returns {Object}  retObj - Object returned from this function
 * @returns {Array}   retObj.errors - An Array of errors from genius-lyrics-api
 * @returns {Array}   retObj.searchResults - An Array of song objects
 * @returns {Boolean} retObj.isSuccessful - A Boolean stating 'true' if search is successful
 */
const searchGenius = async searchObj => {
  let errors = [];
  let retObj = {};
  const apiKey = process.env.GENIUS_CLIENT
  const optimizeQuery = true

  searchOptions = { ...searchObj, apiKey, optimizeQuery }

  try {
    let searchResults = await searchSong(searchOptions)
    retObj.searchResults = searchResults;
  } catch(err) {
    errors.push(err)
  }

  retObj.isSuccessful = errors.length > 0 ? false : true;
  retObj.errors = errors;

  return retObj;
}

module.exports = searchGenius