import express from 'express'

const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Forside')
})

app.get('/about', (req, res) => {
    res.send('Om os')
})

app.listen(port, () =>{
    console.log(`Webserver is running now on http://localhost:${port}`);
})