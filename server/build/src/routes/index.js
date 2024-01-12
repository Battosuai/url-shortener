"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shortUrl_controller_1 = require("../controllers/shortUrl.controller");
function routes(app) {
    app.get('/health', (req, res) => {
        res.send('App is running');
    });
    app.post('/url', shortUrl_controller_1.createShortUrl);
}
exports.default = routes;
