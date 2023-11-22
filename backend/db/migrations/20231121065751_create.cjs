/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // exports function up(knex) {
  return knex.schema.createTable('user_info', function (table) {
    table.increments('id').primary(); // Set this column as the primary key
    table.string('first_name', 32);
    table.string('last_name', 32).notNullable();
    table.string('role', 32);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  //  export function down(knex) {
  return knex.schema.dropTable('user_info');
};
