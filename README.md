# NEIGHBORhood Karaoke Helper

A RESTful API that switches in the word 'NEIGHBOR', replacing instances of the n-word in song lyrics.

This API uses Express and the Genius API through [genius-lyrics-api](https://github.com/farshed/genius-lyrics-api) npm package.

---
</br>
</br>

## Description

</br>

This API offers a simple alternative to using the n-word in song.

Using your favorite REST client hit the below endpoints to search for a song and/or return lyrics that have been specifically altered to improve potentially unfortunate choices. Doing better really is so easy.

Inspired by this author's unlucky karaoke-night shifts behind the bar in a Texas college town, and by the below tweet:

[!["y'all want permission to say the n-word because it's in the lyrics but will change the pronouns in a love song so you don't sound gay"
](readmeImages/kelpyTweet.png
"Razor-sharp tweet by @kelseybuckles")
](https://twitter.com/kelseybuckles/status/1191719815473483776)

---
</br>
</br>

## Audience

</br>

You know who you are.

---
</br>
</br>

## Usage

</br>

> Root URL: [https://my-neighbor-api.herokuapp.com](https://my-neighbor-api.herokuapp.com)

</br>
</br>

### `POST` to: `/search`

</br>

Requires a json body object:

```js
{
  "title": string,
  "artist": string
}
```

Returns an array of json objects:

```js
[
  {
    "id": integer,       // Genius song id
    "url": string,      // Genius webpage URL for the song
    "title": string,    // Song title
    "albumArt": string  // URL of the album art image (jpg/png)
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

---
</br>
</br>

### `POST` to: `/lyrics`

</br>

Requires a json body object:

```js
{
  "url": string
}
```

Returns a string of altered lyrics.

Sample request to `rooturl/lyrics`:

```json
  {
    "url": "https://genius.com/Kendrick-lamar-maad-city-lyrics"
  }
```

---
</br>
</br>

## Author

</br>

[BenR](https://github.com/thisbenrogers)

---
</br>
</br>

## License

</br>

MIT © Ben Rogers