const db = require('../data/dbConfig');

module.exports = {
    getResources
}

function getResources() {
    return db('Resources')
    .select('id', 'name', 'description')
}