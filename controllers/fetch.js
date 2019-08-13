var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    return scrape()
      .then(function(articles) {
        return db.headline.create(articles);
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "no new articles today"
          });
        } else {
          res.json({
            message: "added" + dbHeadline.length + "new articles"
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: "scrape complete"
        });
      });
  }
};
