/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('score_info', function (table) {
    table.increments('id').primary(); // Set this column as the primary key
    table.integer('user_id').references('id').inTable('user_info');
    table.integer('score').notNullable();
    table.date('date_update').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('score_info');
};
