import { Express, Request, Response } from 'express';
import {
    createShortUrl,
    handleRedirect,
    getAnalytics,
} from '../controllers/shortUrl.controller';
import validateResource from '../middleware/validateResource';
import createShortUrlSchema from '../schemas/createShortUrl.schema';

function routes(app: Express) {
    app.get('/health', (req: Request, res: Response) => {
        res.send('App is running');
    });

    app.post('/url', validateResource(createShortUrlSchema), createShortUrl);

    app.get('/analytics', getAnalytics);

    app.get('/:shortId', handleRedirect);
}

export default routes;
