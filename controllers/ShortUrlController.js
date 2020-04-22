const ShortUrl = require('../models/ShortUrl');

module.exports = {
  async store(req, res) {
    let shortUrl = await ShortUrl.create({
      fullUrl: req.body.fullUrl,
    });
    res.json(shortUrl);
  },
  async index(req, res) {
    let shortUrls = await ShortUrl.find();
    res.json(shortUrls);
  },
  async check(req, res) {
    let shortUrl = await ShortUrl.findOne({
      shrinkedUrl: req.params.shrinkedurl,
    });
    res.redirect(shortUrl.fullUrl);
  },
};
