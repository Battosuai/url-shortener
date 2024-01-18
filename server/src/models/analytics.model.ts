import mongoose, { Document } from 'mongoose';

export interface IAnalytics extends Document {
    shortUrl: string;
}

const schema = new mongoose.Schema(
    {
        shortId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'shortUrl',
            required: true,
        },
    },
    { timestamps: true }
);

const analytics = mongoose.model<IAnalytics>('analytics', schema);

export default analytics;
