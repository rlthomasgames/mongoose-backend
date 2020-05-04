const mongoose = require('mongoose');

const mapRegionSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        regionId: String,
        tiles: [{
            id: String,
            tileType: Number
        }]
    }
)

module.exports = mongoose.model('MapRegion', mapRegionSchema);