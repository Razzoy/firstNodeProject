import express from 'express'
import dotenv from 'dotenv'
import { SongController } from './Controllers/song.controller.js'
import { ArtistController } from './Controllers/artist.controller.js'
import { AlbumController } from './Controllers/album.controller.js'
const app = express()
const port = process.env.PORT;

dotenv.config()

app.use(SongController)
app.use(ArtistController)
app.use(AlbumController)


app.listen(port, () =>{
    console.log(`Webserver is running now on http://localhost:${port}`);
})

// import SongModel from './Models/song.model.js';
// import AlbumModel from './Models/album.model.js';
// import ArtistModel from './Models/artist.model.js';
// const api_key = process.env.APIKEY;

// app.get('/', (req, res) => {
//     console.log(req.query);
//     res.send('Forside')
// })

// app.post('/', (req, res) => {
//     res.send('Endpoint til POST')
// })

// app.get('/sange', async (req, res) => {
//     const data = await SongModel.getAllRecords()
//     res.send(data)
// })

// app.get('/artister', async (req, res) => {
//     const data = await ArtistModel.getAllArtists()
//     res.send(data)
// })

// app.get('/albums', async (req, res) => {
//     const data = await AlbumModel.getAllAlbums()
//     res.send(data)
// })

// app.get('/about', (req, res) => {
//     res.send('Om os')
// })

// app.use((req, res, next) => {
//     res.status(404).send("Siden blev ikke fundet")
// })

