/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("projects").del();
  await knex("projects").insert([
    {
      user_id: 1,
      title: "Meu Projeto",
    },
  ]);
};
