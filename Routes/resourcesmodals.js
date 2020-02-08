const db = require('../data/dbConfig');

module.exports = {
    get,
    add, 
    findById
}

function get() {
    return db('Resources')
    .select('id', 'name', 'description')
}

function findById(id) {
    return db('Resources')
        .where({id})
        .first();
}
function add(resource) {
    return db('Resources')
        .insert(resource)
        
}