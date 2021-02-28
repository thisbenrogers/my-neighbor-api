# NEIGHBORhood Karaoke Helper

A RESTful API that switches in the word 'NEIGHBOR', replacing instances of the n-word in song lyrics.

This API uses Express and the Genius API through [genius-lyrics-api](https://github.com/farshed/genius-lyrics-api) npm package.

## Description

This API offers a simple alternative to using the n-word in song.

Using your favorite REST client hit the below endpoints to search for a song and/or return lyrics that have been specifically altered to improve potentially unfortunate choices. Doing better really is so easy.

Inspired by this author's unlucky karaoke-night shifts behind the bar in a Texas college town, and by the below tweet:

[!["y'all want permission to say the n-word because it's in the lyrics but will change the pronouns in a love song so you don't sound gay"
](readmeImages/kelpyTweet.png
"Razor-sharp tweet by @kelseybuckles")
](https://twitter.com/kelseybuckles/status/1191719815473483776)


## Usage

Root URL: TODO add root URL once deployed

### `/search`

Requires a json body object:

```json
{
  title: string,
  artist: string    // optional
}
```

Returns an array of json objects:

```json
[
  {
    id: number,       // Genius song id
    url: string,      // Genius webpage URL for the song
    title: string,    // Song title
    albumArt: string  // URL of the album art image (jpg/png)
  },
]
```

Sample request to `rooturl/search`:

```json
  {
    "title": "M.A.A.D. City",
    "artist": "Kendrick Lamar"
  }
```


### `/lyrics`

Requires a json body object:

```json
{
  title: string,
  artist: string      // optional
}
```

Returns a json object:

```json
{
  id: number,               // Genius song id
  url: string,              // Genius webpage URL for the song
  alteredLyrics: string,    // ALTERED Song lyrics
  albumArt: string          // URL of the album art image (jpg/png)
}
```

Sample request to `rooturl/lyrics`:

```json
  {
    "title": "M.A.A.D. City",
    "artist": "Kendrick Lamar"
  }
```

---

## Author
### [BenR](https://github.com/thisbenrogers)


## License

MIT © Ben Rogers