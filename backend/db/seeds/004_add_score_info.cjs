/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('score_info').insert([
    { id: 16, user_id: 1, score: 32, date_update: '2023-10-23' },
    { id: 17, user_id: 1, score: 32, date_update: '2023-10-24' },
    { id: 18, user_id: 1, score: 30, date_update: '2023-10-25' },
    { id: 19, user_id: 1, score: 21, date_update: '2023-10-26' },
    { id: 20, user_id: 1, score: 24, date_update: '2023-10-27' },
    { id: 21, user_id: 1, score: 36, date_update: '2023-10-30' },
    { id: 22, user_id: 1, score: 27, date_update: '2023-10-31' },
    { id: 23, user_id: 1, score: 28, date_update: '2023-11-01' },
    { id: 24, user_id: 1, score: 29, date_update: '2023-11-02' },
    { id: 25, user_id: 1, score: 36, date_update: '2023-11-06' },
    { id: 26, user_id: 1, score: 38, date_update: '2023-11-07' },
    { id: 27, user_id: 1, score: 37, date_update: '2023-11-08' },
    { id: 28, user_id: 1, score: 38, date_update: '2023-11-09' },
    { id: 29, user_id: 1, score: 37, date_update: '2023-11-10' },
    { id: 30, user_id: 1, score: 36, date_update: '2023-11-13' },
    { id: 31, user_id: 1, score: 36, date_update: '2023-11-14' },
    { id: 32, user_id: 1, score: 37, date_update: '2023-11-15' },
    { id: 33, user_id: 1, score: 42, date_update: '2023-11-16' },
    { id: 34, user_id: 1, score: 38, date_update: '2023-11-17' },
  ]);
};
