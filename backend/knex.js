import config from '../knexfile.js';
import knex from 'knex';

const knexConfig = knex(config);

export { knexConfig as knex };
