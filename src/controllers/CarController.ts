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

  async readOne(req: Request, res: Response, next: NextFunction)
    : Promise<void | Response> {
    try {
      const { id } = req.params;

      const car = await this._service.readOne(id);

      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction)
    : Promise<void | Response> {
    try {
      const { id } = req.params;
      const {
        doorsQty, seatsQty, model, year, color, status, buyValue,
      }: Car = req.body;

      const updatedCar = await this._service.update(id, {
        doorsQty, seatsQty, model, year, color, status, buyValue,
      });

      return res.status(200).json(updatedCar);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction)
    : Promise<void | Response> {
    try {
      const { id } = req.params;

      await this._service.delete(id);

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

export default CarController;
