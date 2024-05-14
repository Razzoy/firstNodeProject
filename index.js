import express from 'express'
import dotenv from 'dotenv'
import SongModel from './Models/song.model.js';
import AlbumModel from './Models/album.model.js';
import ArtistModel from './Models/artist.model.js';
const app = express()
dotenv.config()

const port = process.env.PORT;
const api_key = process.env.APIKEY;

app.get('/', (req, res) => {
    console.log(req.query);
    res.send('Forside')
})

app.post('/', (req, res) => {
    res.send('Endpoint til POST')
})

app.get('/sange', async (req, res) => {
    const data = await SongModel.getAllRecords()
    res.send(data)
})

app.get('/artister', async (req, res) => {
    const data = await ArtistModel.getAllArtists()
    res.send(data)
})

app.get('/albums', async (req, res) => {
    const data = await AlbumModel.getAllAlbums()
    res.send(data)
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