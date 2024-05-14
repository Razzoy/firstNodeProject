import express from 'express'
import dotenv from 'dotenv'
import { supabase } from './Config/config.supabase.js';

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
    const { data, error } = await supabase
        .from('songs')
        .select('id, title')
    if(error) {
        console.error(error);
    } else {
        res.send(data);
    }
})

app.get('/artists', async (req, res) => {
    const { data, error } = await supabase
        .from('artists')
        .select('id, name, description, image, created_at, updated_at')
    if(error) {
        console.error(error);
    } else {
        res.send(data);
    }
})

app.get('/albums', async (req, res) => {
    const { data, error } = await supabase
        .from('albums')
        .select('title, image, artists(name))')
    if(error) {
        console.error(error);
    } else {
        res.send(data);
    }
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