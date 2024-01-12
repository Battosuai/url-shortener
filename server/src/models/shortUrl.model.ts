import mongoose, { Document } from 'mongoose';
import { customAlphabet } from 'nanoid';

const nanoId = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6);

export interface IShortUrl extends Document {
    shortId: string;
    destination: string;
}

const schema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
        default: () => nanoId(),
    },
    destination: {
        type: String,
        required: true,
    },
});

const shortUrl = mongoose.model<IShortUrl>('shortUrl', schema);

export default shortUrl;
