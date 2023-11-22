/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user_info').del();
  await knex('user_info').insert([
    { id: 1, first_name: 'Shogo', last_name: 'INOUE', role: 'dev' },
    { id: 2, first_name: 'Ryozo', last_name: 'IHARA', role: 'dev' },
    { id: 3, first_name: 'HEEGWON', last_name: 'IM', role: 'dev' },
  ]);
};
