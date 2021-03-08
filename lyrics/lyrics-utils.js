const { getLyrics } = require('genius-lyrics-api');

/**
 * 
 * @param string url - url to genius lyrics page for specific song
 * 
 * @returns string lyrics - returns promise that resolves to string of lyrics
 * 
 */

const getOGLyrics = async url => {
  let errors = [];
  let retObj = {};

  try {
    let lyricsResults = await getLyrics(url);
    retObj.lyrics = lyricsResults;
  } catch(err) {
    errors.push(err);
  }

  retObj.isSuccessful = errors.length > 0 ? false : true;
  retObj.errors = errors;
  return retObj;
}

const alterLyrics = ogLyrics => {
  const searchRegEx = new RegExp(/niggah|nigga|nigguh/gmi)
  const replaceWith = 'NEIGHBOR';
  newLyrics = ogLyrics.replace(searchRegEx, replaceWith);
  return newLyrics
}

module.exports = {
  getOGLyrics,
  alterLyrics
};