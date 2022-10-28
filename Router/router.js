const express = require('express');
const PathChose = require('../Database Schema/databaseSchema');

const router = express.Router();

// for the full list of paths with values
router.get('/all', (req, res) => {

    PathChose.find().then(result => {
        res.status(200).json({
            message: "Data Fetched Successfully",
            data: result
        })
    })
        .catch(error => {
            res.status(500).json({
                message: "Error in database",
                error: error
            })
        })

});

//  data only with a particular value
router.get('/all/:videoNo', (req, res) => {
    let value = req.params.videoNo;

    PathChose.find({"value": value}).then(result => {
        res.status(200).json({
            message: "Data Fetched Successfully",
            data: result
        })
    })
        .catch(error => {
            res.status(500).json({
                message: "Error in database",
                error: error
            })
        })

});


module.exports = router;
