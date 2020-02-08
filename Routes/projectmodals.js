const db = require('../data/dbConfig');

module.exports = {
    getResources,
    addResources, 
    getProject,
    addProject
}

function getResources() {
    return db('resources')
    .select('id', 'name', 'description')
}

// function findById(id) {
//     return db('resources')
//         .where({id})
//         .first();
// }
function addResources(resource) {
    return db('resources')
        .insert(resource)
        
}
function getProject() {
    return db('projects');
}

function addProject(project) {
    return db('projects')
        .insert(project)
}