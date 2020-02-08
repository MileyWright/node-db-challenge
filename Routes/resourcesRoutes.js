const express = require('express');

const db = require('./resourcesmodals');

const router = express.Router();

//GET Retrieving a list of resources /resources 
router.get('/', (req,res) => {
    db.getResources()
        .then(resources => {
            res.status(200).json({resources})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not retrieve a list of resources'})
        })
})

//POST  Adding Resources /resources
router.post('/', (req, res) => {
    const body = req.body;
    db.addResources(body)
        .then(resource => {
            res.status(201).json({resource})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not post resources'})
        })
})

//POST  Adding a Project /project/


//GET  Retrieving a list of projects /project/
 

//POST Adding tasks /project/id/tasks


//GET Retrieving a list of tasks /projects/tasks

module.exports = router;
