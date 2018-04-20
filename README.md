<p align="center">
    <img src="https://i.imgur.com/bRX53zo.png" alt="logo" width="300px">
</p>

Node.js implementation of [Music Moo](https://github.com/Music-Moo/Music-Moo)

## Running
For playlist support, you must create a `.env` file with a Youtube V3 API key (see `example.env`)
```
$ npm start
```

## Usage
Send a POST request with `Content-Type: application/json` and body (either keys can be ommited, but not both):
```
{
    "urls": [
        "https://youtube.com/watch?v=id1",
        "https://youtube.com/watch?v=id2",
        "https://youtube.com/watch?v=id3",
        ...
    ],
    "playlist": "https://www.youtube.com/playlist?list=id"
}
```
