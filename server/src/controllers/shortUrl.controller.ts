import { Request, Response } from 'express';
import shortUrl from '../models/shortUrl.model';

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
    return res.redirect(shortObject?.destination || '');
}
