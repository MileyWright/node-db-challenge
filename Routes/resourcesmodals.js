const db = require('../data/dbConfig');

module.exports = {
    getResources,
    addResources, 
    findById
}

function getResources() {
    return db('Resources')
    .select('id', 'name', 'description')
}

function findById(id) {
    return db('Resources')
        .where({id})
        .first();
}
function addResources(resource) {
    return db('Resources')
        .insert(resource)
        
}