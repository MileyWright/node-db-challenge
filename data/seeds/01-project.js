
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {id: 1, name: 'English Essay', description: 'Write a paper on the concept of Javascript', completed: 'false'},
        {id: 2, name: 'History Project', description: 'List of major events in 1940', completed: 'false'}
      ])
    });
};
