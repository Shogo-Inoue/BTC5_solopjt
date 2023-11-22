import { knex } from './knex.js';

export default {
  getById(id) {
    return knex
      .select({
        id: 'id',
        firstName: 'first_name',
        lastName: 'last_name',
        role: 'role',
      })
      .from('user_info')
      .where({
        id: id,
      })
      .first();
  },
  getByScore(id) {
    return knex('user_info')
      .leftJoin('score_info', 'user_info.id', '=', 'score_info.user_id')
      .select({
        user_id: 'user_info.id',
        score: 'score_info.score',
        date: 'score_info.date_update',
      })
      .where({ 'user_info.id': id });
  },
};
