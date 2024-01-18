import { Request, Response, NextFunction } from 'express';
import { AnyObjectSchema } from 'yup';

const validateResource =
    (resourceSchema: AnyObjectSchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await resourceSchema.validate({
                body: req.body,
                params: req.params,
                query: req.query,
            });
            next();
        } catch (error) {
            console.error(error);
            return res.sendStatus(400);
        }
    };

export default validateResource;
