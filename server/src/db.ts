import mongoose from 'mongoose';
import config from 'config';

export function db() {
    const dbUri = config.get('dbUri') as string;
    try {
        mongoose.connect(dbUri).then(() => {
            console.log(`Db connected to ${dbUri}`);
        });
    } catch (error) {
        console.error(error);
    }
}

export default db;
