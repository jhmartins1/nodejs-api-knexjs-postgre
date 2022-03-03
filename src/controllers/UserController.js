const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex("users").where("deleted_at", null);
    res.json(results);
  },
  async create(req, res) {
    const { username } = req.body;
    await knex("users").insert({ username });
    return res.status(201).send("Created user");
  },
  async update(req, res) {
    const { id } = req.params;
    const { username } = req.body;
    await knex("users").update({ username }).where({ id });
    return res.status(200).send("Updated user");
  },
  async delete(req, res) {
    const { id } = req.params;
    await knex("users").where({ id }).update("deleted_at", new Date());
    return res.status(200).send("Deleted User");
  },
};
