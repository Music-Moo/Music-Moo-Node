import * as express from 'express';

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
    this.express.use(express.static(__dirname + '/public'))
  }

  private mountRoutes (): void {
    const router = express.Router()

    router.get('/', (req, res) => {
      res.sendFile(__dirname + '/views/index.html')
    })

    this.express.use('/', router)
  }
}

export default new App().express
