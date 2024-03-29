import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';

import routes from './routes';
import db from './db';
const app = express();

app.use(bodyParser.json());

const port = config.get('port');

app.listen(port, () => {
    console.log(`App running at Port: ${port}`);
    db();
    routes(app);
});
