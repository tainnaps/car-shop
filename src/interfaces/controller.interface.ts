import { Request, Response, NextFunction } from 'express';

export interface Controller<T> {
  create(
    req: Request, res: Response, next: NextFunction
  ): Promise<Response<T> | void>;
  read(
    req: Request, res: Response, next: NextFunction
  ): Promise<Response<T> | void>;
  readOne(
    req: Request, res: Response, next: NextFunction
  ): Promise<Response<T> | void>;
  update(
    req: Request, res: Response, next: NextFunction
  ): Promise<Response<T> | void>;
  delete(
    req: Request, res: Response, next: NextFunction
  ): Promise<Response<T> | void>;
}
