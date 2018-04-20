
import * as dotenv from 'dotenv'
dotenv.config()

import app from './App'

const port = 3000

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`Now listening on port ${port}.`)
})
