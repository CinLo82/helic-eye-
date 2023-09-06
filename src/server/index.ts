import express, { Express, Request, Response } from 'express'
import { config } from './config'
import { render } from './render'


const app: Express = express()

app.use(express.static('dist'))

app.get('*', (req: Request, res: Response) => {
    res.send(render(req.url))
})

app.listen(3500, () => {
    console.log(`Listining in http://localhost:${config.PORT}`)
})