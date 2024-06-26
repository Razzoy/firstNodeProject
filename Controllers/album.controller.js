import express from 'express';
import AlbumModel from '../Models/album.model.js'
export const AlbumController = express.Router();

AlbumController.get('/albums', async (req, res) =>{
    const data = await AlbumModel.getAllAlbums()
    res.send(data)
})