import * as bodyParser from 'body-parser'
import * as express from 'express';
import { download } from './download'

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
      let urls = req.body.urls
      for (let url of urls) download(url)
      res.send('Download has started!')
    })

    this.express.use('/', router)
    this.express.use('/download', router)
  }
}

export default new App().express
