
exports.up = function(knex) {
  return knex.schema
    .createTable('Projects', tbl => {
        tbl.increments()
        tbl.string('name', 125)
            .notNullable()
        tbl.string('description', 125)
            .notNullable()
        tbl.boolean('completed')
            .notNullable();
    })
    .createTable('Resources', tbl => {
        tbl.increments()
        tbl.string('name', 125)
            .notNullable()
        tbl.string('description', 125)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('Projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
    .createTable('Tasks', tbl => {
        tbl.increments()
        tbl.string('task', 125)
            .notNullable()
        tbl.string('notes', 125)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('Projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.boolean('completed')
            .notNullable();
    })
 
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Tasks')
    .dropTableIfExists('Resources')
    .dropTableIfExists('Projects')
};
