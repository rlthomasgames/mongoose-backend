const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const MapRegion = require('../models/mapRegion');

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'handled get to map'
    })
});

router.post('/', (req, res, next)=>{
    const mapRegion = new MapRegion({
        _id: new mongoose.Types.ObjectId(),
        regionId: req.body.regionId,
        tiles: req.body.tiles
    });
    mapRegion
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'created Regiom',
        createdRegion: mapRegion.regionId,
        tiles: mapRegion.tiles
    })
});

router.get('/:regionId', (req, res, next)=>{
    //get by region id!
    const regionId = req.params.regionId;
    MapRegion.find({regionId : regionId})
    .exec()
    .then((docs) => {
        console.log('docs...', docs);
        res.status(200).json(docs);
    })
    .catch();
});

router.patch('/:regionId', (req, res, next)=>{
    //TODO
    const regionId = req.params.regionId;
    res.status(200).json({
        message: 'handled get to map'
    })
});

router.delete('/:regionId', (req, res, next)=>{
    //TODO
    const regionId = req.params.regionId;
    res.status(200).json({
        message: 'handled get to map'
    })
});

module.exports = router;