/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('score_info').del();
  await knex('score_info').insert([
    { id: 1, user_id: 1, score: 28, date_update: '2023-10-16' },
    { id: 2, user_id: 2, score: 25, date_update: '2023-10-16' },
    { id: 3, user_id: 3, score: 45, date_update: '2023-10-16' },
    { id: 4, user_id: 1, score: 31, date_update: '2023-10-17' },
    { id: 5, user_id: 2, score: 30, date_update: '2023-10-17' },
    { id: 6, user_id: 3, score: 51, date_update: '2023-10-17' },
    { id: 7, user_id: 1, score: 29, date_update: '2023-10-18' },
    { id: 8, user_id: 2, score: 25, date_update: '2023-10-18' },
    { id: 9, user_id: 3, score: 45, date_update: '2023-10-18' },
    { id: 10, user_id: 1, score: 33, date_update: '2023-10-19' },
    { id: 11, user_id: 2, score: 34, date_update: '2023-10-19' },
    { id: 12, user_id: 3, score: 48, date_update: '2023-10-19' },
    { id: 13, user_id: 1, score: 30, date_update: '2023-10-20' },
    { id: 14, user_id: 2, score: 32, date_update: '2023-10-20' },
    { id: 15, user_id: 3, score: 46, date_update: '2023-10-20' },
  ]);
};
