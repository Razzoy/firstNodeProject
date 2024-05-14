import express from 'express'

const app = express()
const port = 3000;

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