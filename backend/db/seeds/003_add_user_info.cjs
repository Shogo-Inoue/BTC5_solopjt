/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('user_info').del();
  await knex('user_info').insert([
    { id: 4, first_name: 'Myu', last_name: 'UEHARA', role: 'dev' },
    { id: 5, first_name: 'Satru', last_name: 'OBUCHI', role: 'dev' },
    { id: 6, first_name: 'KAzuyosi', last_name: 'OGATA', role: 'dev' },
    { id: 7, first_name: 'Takahiro', last_name: 'ONO', role: 'dev' },
    { id: 8, first_name: 'Maaya', last_name: 'KATAGIRI', role: 'dev' },
    { id: 9, first_name: 'Yasuhiko', last_name: 'KUNO', role: 'dev' },
    { id: 10, first_name: 'Tomohiro', last_name: 'JIN', role: 'dev' },
    { id: 11, first_name: 'Tatsuhiro', last_name: 'TAKAHASI', role: 'dev' },
    { id: 12, first_name: 'Yoshitaka', last_name: 'TANAKA', role: 'dev' },
    { id: 13, first_name: 'Naoya', last_name: 'HASHIDATE', role: 'dev' },
    { id: 14, first_name: 'Shunichi', last_name: 'BABA', role: 'dev' },
    { id: 15, first_name: 'Yusuke', last_name: 'YOKOTA', role: 'dev' },
  ]);
};
