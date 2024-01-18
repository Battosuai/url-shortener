import { Request, Response } from 'express';
import shortUrl from '../models/shortUrl.model';
import analytics from '../models/analytics.model';

export async function createShortUrl(req: Request, res: Response) {
    const { destination } = req.body;

    const newUrl = await shortUrl.create({ destination });

    return res.send(newUrl);
}

export async function handleRedirect(req: Request, res: Response) {
    const { shortId } = req.params;

    const shortObject = await shortUrl.findOne({ shortId }).lean();

    if (!shortObject) {
        res.sendStatus(404);
    }

    analytics.create({ shortId: shortObject?._id });

    return res.redirect(shortObject?.destination || '');
}

export async function getAnalytics(req: Request, res: Response) {
    const data = await analytics.find().lean();

    return res.send(data);
}
