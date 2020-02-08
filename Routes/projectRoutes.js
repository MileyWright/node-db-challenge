const express = require('express');

const db = require('./projectmodals');

const router = express.Router();

//GET Retrieving a list of resources /resources 
router.get('/resources', (req,res) => {
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
router.post('/resources', (req, res) => {
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

//POST  Adding a Project /project
router.post('/', (req,res) => {
    const body = req.body;
    db.addProject(body)
        .then(project => {
            res.status(201).json({project})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not post project'})
        })
})

//GET  Retrieving a list of projects /project/
router.get('/', (req,res) => {
    db.getProject()
        .then(project => {
            res.status(200).json({project})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not get projects'})
        })
})

//POST Adding tasks /project/tasks
router.post('/tasks', (req,res) => {
    const body = req.body
    db.addTask(body)
        .then(task => {
            res.status(201).json({task})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not post task'})
        })
})

//GET Retrieving a list of tasks /projects/tasks
router.get('/:id/tasks', (req,res) => {
    const id = req.params.id;
    db.getTaskAndProjects(id)
        .then(task => {
            res.status(200).json({task})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Could not get list of tasks'})
        })
})

module.exports = router;
