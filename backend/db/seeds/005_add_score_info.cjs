/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('score_info').insert([
    { id: 35, user_id: 2, score: 29, date_update: '2023-10-23' },
    { id: 36, user_id: 2, score: 33, date_update: '2023-10-24' },
    { id: 37, user_id: 2, score: 34, date_update: '2023-10-25' },
    { id: 38, user_id: 2, score: 31, date_update: '2023-10-26' },
    { id: 39, user_id: 2, score: 34, date_update: '2023-10-27' },
    { id: 40, user_id: 2, score: 33, date_update: '2023-10-30' },
    { id: 41, user_id: 2, score: 31, date_update: '2023-10-31' },
    { id: 42, user_id: 2, score: 34, date_update: '2023-11-01' },
    { id: 43, user_id: 2, score: 32, date_update: '2023-11-02' },
    { id: 44, user_id: 2, score: 37, date_update: '2023-11-06' },
    { id: 45, user_id: 2, score: 37, date_update: '2023-11-07' },
    { id: 46, user_id: 2, score: 34, date_update: '2023-11-08' },
    { id: 47, user_id: 2, score: 37, date_update: '2023-11-09' },
    { id: 48, user_id: 2, score: 36, date_update: '2023-11-10' },
    { id: 49, user_id: 2, score: 37, date_update: '2023-11-13' },
    { id: 50, user_id: 2, score: 37, date_update: '2023-11-14' },
    { id: 51, user_id: 2, score: 37, date_update: '2023-11-15' },
    { id: 52, user_id: 2, score: 36, date_update: '2023-11-16' },
    { id: 53, user_id: 2, score: 37, date_update: '2023-11-17' },
  ]);
};
