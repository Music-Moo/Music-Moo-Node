import { google } from 'googleapis'

export const youtube: any = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_KEY
})
