
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {id: 1, name: 'Google', description: '', project_id: '1'},
        {id: 2, name: 'Video Camera', description: '', project_id: '2'}
      ]);
    });
};
