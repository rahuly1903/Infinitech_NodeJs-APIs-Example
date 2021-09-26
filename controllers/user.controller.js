const userModel = require("../models/user.model");

const findAll = (req, res) => {
  res.send({ msg: "findALL" });
};

const create = (req, res) => {
  res.send({ msg: "createAll" });
};

module.exports = {
  findAll,
  create,
};
