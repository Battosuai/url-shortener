import { Express, Request, Response } from 'express';
import {
    createShortUrl,
    handleRedirect,
} from '../controllers/shortUrl.controller';

function routes(app: Express) {
    app.get('/health', (req: Request, res: Response) => {
        res.send('App is running');
    });

    app.post('/url', createShortUrl);

    app.get('/:shortId', handleRedirect);
}

export default routes;
