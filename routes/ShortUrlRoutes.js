const { Router } = require('express');
const ShortUrlController = require('../controllers/ShortUrlController');

const routes = Router();

routes.post('/shorturl', ShortUrlController.store);
routes.get('/shorturl', ShortUrlController.index);
routes.get('/shorturl/:shrinkedurl', ShortUrlController.check);

module.exports = routes;
