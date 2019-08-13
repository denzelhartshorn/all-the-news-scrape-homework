var db = require("../models");

module.exports = {
  fund: function(req, res) {
    db.Note.find({ _headlineID: req.params.id }).then(function(dbNote) {
      res.json(dbNote);
    });
  },
  create: function(req, res) {
    db.Note.create(req.body).then(function(dbNote) {
      res.json(dbNote);
    });
  },
  delete: function(req, res) {
    db.Note.remove({ _id: req.params.id }).then(function(dbNote) {
      res.json(dbNote);
    });
  }
};
