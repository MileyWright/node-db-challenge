const db = require('../data/dbConfig');

module.exports = {
    getResources,
    addResources, 
    getProject,
    addProject,
    getTaskAndProjects,
    addTask
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

function addTask(task) {
    return db('tasks')
        .insert(task)
}

function getTaskAndProjects(id) {
    return db
        .select('tasks.*', 'projects.name', 'projects.description')
        .from('tasks')
        .join('projects', 'tasks.project_id', '=', 'projects.id')
        .where('projects.id', id);
}