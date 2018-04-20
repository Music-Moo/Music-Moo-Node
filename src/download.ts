import * as ytdl from 'ytdl-core'
import * as ffmpeg from 'fluent-ffmpeg'
import { Promise } from 'es6-promise'

export let download = (url: string) => {
  let options = {
    quality: 'highestaudio',
    filter: format => format.container === 'mp4'
  }
  return new Promise((resolve, reject) => {
    let stream = ytdl(url, options)
      .on('info', info => {
        let data = {stream: stream, info: info}
        resolve(data)
      })
  })
    .then((data) => {
      let start = Date.now()
      ffmpeg(data['stream'])
        .save(`${__dirname}/${data['info'].title}.mp3`)
        .on('end', () => {
          console.log(`Download for ${data['info'].title} completed in ${(Date.now() - start) / 1000}s`)
        })
    }, err => console.log(err))
}
