import * as ytdl from 'ytdl-core'
import * as ffmpeg from 'fluent-ffmpeg'
import { Promise } from 'es6-promise'
import { youtube } from './connection'

export let downloadTrack = (trackUrl: string) => {
  let options = {
    quality: 'highestaudio',
    filter: format => format.container === 'mp4'
  }
  return new Promise((resolve, reject) => {
    let stream = ytdl(trackUrl, options)
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

export let downloadPlaylist = (playlistUrl: string) => {
  let parameters = {
    playlistId: playlistUrl.split('playlist?list=')[1],
    part: 'contentDetails',
    maxResults: 50
  } 
  youtube.playlistItems.list(parameters)
    .then(response => {
      for (let video of response.data.items) {
        downloadTrack(`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`)
      }
    })
    .catch(err => console.log(err))
}
