import * as bodyParser from 'body-parser'
import * as express from 'express';
import { downloadTrack, downloadPlaylist } from './download'

class App {
  public express

  constructor () {
    this.express = express()
    this.express.use(bodyParser.json())
    this.express.use(express.static(__dirname + '/public'))
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()

    router.get('/', (req, res) => {
      res.sendFile(__dirname + '/views/index.html')
    })

    router.post('/download', (req, res) => {
      let body = req.body
      if (!('urls' in body) && !('playlist' in body)) res.send('Invalid request.')
      if ('urls' in body) for (let url of body.urls) downloadTrack(url)
      if ('playlist' in body) downloadPlaylist(body.playlist)
      res.send('Download request processed!')
    })

    this.express.use('/', router)
    this.express.use('/download', router)
  }
}

export default new App().express
