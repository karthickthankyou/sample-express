import express from 'express'
import { port } from './config'

const app = express()

app.get('/', (_req, res) => {
  res.send('Hello Dev branch.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
