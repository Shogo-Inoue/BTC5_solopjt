/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('score_info').insert([
    { id: 54, user_id: 3, score: 0, date_update: '2023-10-23' },
    { id: 55, user_id: 3, score: 54, date_update: '2023-10-24' },
    { id: 56, user_id: 3, score: 51, date_update: '2023-10-25' },
    { id: 57, user_id: 3, score: 46, date_update: '2023-10-26' },
    { id: 58, user_id: 3, score: 51, date_update: '2023-10-27' },
    { id: 59, user_id: 3, score: 46, date_update: '2023-10-30' },
    { id: 60, user_id: 3, score: 51, date_update: '2023-10-31' },
    { id: 61, user_id: 3, score: 54, date_update: '2023-11-01' },
    { id: 62, user_id: 3, score: 0, date_update: '2023-11-02' },
    { id: 63, user_id: 3, score: 60, date_update: '2023-11-06' },
    { id: 64, user_id: 3, score: 53, date_update: '2023-11-07' },
    { id: 65, user_id: 3, score: 55, date_update: '2023-11-08' },
    { id: 66, user_id: 3, score: 54, date_update: '2023-11-09' },
    { id: 67, user_id: 3, score: 51, date_update: '2023-11-10' },
    { id: 68, user_id: 3, score: 54, date_update: '2023-11-13' },
    { id: 69, user_id: 3, score: 54, date_update: '2023-11-14' },
    { id: 70, user_id: 3, score: 55, date_update: '2023-11-15' },
    { id: 71, user_id: 3, score: 56, date_update: '2023-11-16' },
    { id: 72, user_id: 3, score: 54, date_update: '2023-11-17' },
  ]);
};
