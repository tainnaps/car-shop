import { Request, Response, NextFunction } from 'express';
import { Controller } from '../interfaces/ControllerInterface';
import { Service } from '../interfaces/ServiceInterface';

abstract class GenericController<T> implements Controller<T> {
  protected _service: Service<T>;

  constructor(service: Service<T>) {
    this._service = service;
  }

  abstract create(req: Request, res: Response, next: NextFunction)
  : Promise<void | Response>;

  abstract read(req: Request, res: Response, next: NextFunction)
  : Promise<void | Response>;

  abstract readOne(req: Request, res: Response, next: NextFunction)
  : Promise<void | Response>;

  abstract update(req: Request, res: Response, next: NextFunction)
  : Promise<void | Response>;

  abstract delete(req: Request, res: Response, next: NextFunction)
  : Promise<void | Response>;
}

export default GenericController;
