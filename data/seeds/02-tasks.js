
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {id: 1, task: 'Read a Javascipt Book', notes: 'Eloquent JS is a great book', project_id: '1', completed: 'false'},
        {id: 2, task: 'Research the year 1940', notes: '', project_id: '2', completed: 'false'}
      ]);
    });
};
