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

    this._router.route(`${carRoute}/`)
      .post(this._controller.create.bind(this._controller))
      .get(this._controller.read.bind(this._controller));

    this._router.route(`${carRoute}/:id`)
      .get(this._controller.readOne.bind(this._controller))
      .put(this._controller.update.bind(this._controller))
      .delete(this._controller.delete.bind(this._controller));
  }
}

export default CarRouter;
