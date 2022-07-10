import { Request, Response, NextFunction } from 'express';
import { Car } from '../interfaces/CarInterface';
import { Service } from '../interfaces/ServiceInterface';
import CarService from '../services/CarService';
import GenericController from './GenericController';

class CarController extends GenericController<Car> {
  constructor(service: Service<Car> = new CarService()) {
    super(service);
  }

  async create(req: Request, res: Response, next: NextFunction)
    : Promise<void | Response> {
    try {
      const {
        doorsQty, seatsQty, model, year, color, status, buyValue,
      }: Car = req.body;

      const newCar = await this._service.create({
        doorsQty, seatsQty, model, year, color, status, buyValue,
      });

      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  }

  async read(_req: Request, res: Response, next: NextFunction)
    : Promise<void | Response> {
    try {
      const cars = await this._service.read();
      return res.status(200).json(cars);
    } catch (error) {
      next(error);
    }
  }

  async readOne(_req: Request, _res: Response, _next: NextFunction)
    : Promise<void | Response> {
    throw new Error(`Not Implemented ${this}`);
  }

  async update(_req: Request, _res: Response, _next: NextFunction)
    : Promise<void | Response> {
    throw new Error(`Not Implemented ${this}`);
  }

  async delete(_req: Request, _res: Response, _next: NextFunction)
    : Promise<void | Response> {
    throw new Error(`Not Implemented ${this}`);
  }
}

export default CarController;