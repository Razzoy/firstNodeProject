import express from 'express';
import SongModel from '../Models/song.model.js'
export const SongController = express.Router();

SongController.get('/songs/:id', async (req, res) =>{
    console.log(req.params);
    
    // const data = await SongModel.getAllRecords()
    // res.send(data)
})