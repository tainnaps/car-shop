import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import CustomError from '../errors/CustomError';

export type ErrorFunction = (
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => void;

const errorMiddleware: ErrorFunction = (
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response => {
  if (err instanceof CustomError) {
    return res.status(err.code).json({ message: err.message });
  }

  console.log(err);
  return res.status(500).json({ message: 'Internal server error' });
};

export default errorMiddleware;
