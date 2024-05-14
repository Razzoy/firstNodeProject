import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const port = process.env.PORT
const api_key = process.env.APIKEY;

app.get('/', (req, res) => {
    console.log(req.query);
    res.send('Forside')
})

app.post('/', (req, res) => {
    res.send('Endpoint til POST')
})

app.get('/about', (req, res) => {
    res.send('Om os')
})

app.listen(port, () =>{
    console.log(`Webserver is running now on http://localhost:${port}`);
})

app.use((req, res, next) => {
    res.status(404).send("Siden blev ikke fundet")
})