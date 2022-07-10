import { Request, Response, NextFunction } from 'express';
import CarController from '../controllers/CarController';
import { Car } from '../interfaces/CarInterface';
import { Controller } from '../interfaces/ControllerInterface';
import GenericRouter from './GenericRouter';

class CarRouter extends GenericRouter<Car> {
  constructor(
    routeName: string,
    controller: Controller<Car> = new CarController(),
  ) {
    super(routeName, controller);
  }

  addRoutes(): void {
    const carRoute = this._routeName;

    this._router.post(
      `${carRoute}/`,
      (req: Request, res: Response, next: NextFunction) =>
        this._controller.create(req, res, next),
    );
  }
}

export default CarRouter;
