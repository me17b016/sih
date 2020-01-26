const express = require('express');
const globalRouter = express.Router();
const Global = require('../model/Global');
//const ObjectId = require('mongoose').Types.ObjectId
// READ
globalRouter.get('/', (req, res) => {
    //id = String(id);
    //console.log("raj");
    Global.find({}, (err, response) => {
        if (err) res.status(500).json({
            message : "Unable to get"
        })
        else {
            console.log(req.query.id);
            res.status(200).json({response})
        }
    })
})

// POST

globalRouter.post('/', (req, res) => {
    const global = new Global(req.body);
    user.save((err, response) => {
        if (err) res.status(500).json({
            message : "Unable to add data"
        })
        else res.status(200).json({
            message : "added"
        })
    })
})

// UPDATE 

globalRouter.put('/:id', (req, res) => {
    Global.findOneAndUpdate({_id : req.params.id}, req.body, {runValidators : true}, (err, response) => {
        if(err) {
            console.error(err);
            res.status(500).json({message:{
                msgBody : "Unable to Update User",
                msgError : true
            }});
        }
        else
        res.status(200).json({message:{
            msgBody: "Successfully Updated User",
            msgError : false
        }});   
    })
})
module.exports = globalRouter;