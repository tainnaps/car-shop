import { Router } from 'express';
import { Controller } from '../interfaces/ControllerInterface';

abstract class GenericRouter<T> {
  protected _routeName: string;

  protected _controller: Controller<T>;

  protected _router: Router;

  constructor(routeName: string, controller: Controller<T>) {
    this._router = Router();
    this._routeName = routeName;
    this._controller = controller;
  }

  get router() {
    return this._router;
  }

  abstract addRoutes(): void;
}

export default GenericRouter;
