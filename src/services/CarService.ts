import { Car } from '../interfaces/CarInterface';
import { Service } from '../interfaces/ServiceInterface';
import CarModel from '../models/CarModel';
import GenericService from './GenericService';
import carValidationSchema from '../validations/CarValidationSchema';
import BadRequestError from '../errors/BadRequestError';
import { Model } from '../interfaces/ModelInterface';
import NotFoundError from '../errors/NotFoundError';

class CarService extends GenericService<Car> implements Service<Car> {
  private _notFoundMessage = 'Object not found';

  constructor(model: Model<Car> = new CarModel()) {
    super(model);
  }

  static validateIdLength(id: string): void {
    if (id.length < 24) {
      throw new BadRequestError('Id must have 24 hexadecimal characters');
    }
  }

  async create(data: Car): Promise<void | Car> {
    const validationResult = carValidationSchema.safeParse(data);

    if (!validationResult.success) {
      const errors = validationResult.error.issues;
      throw new BadRequestError(errors[0].message);
    }

    return this._model.create({ ...data });
  }

  async readOne(id: string): Promise<void | Car | null> {
    CarService.validateIdLength(id);

    const car = await this._model.readOne(id);

    if (!car) throw new NotFoundError(this._notFoundMessage);

    return car;
  }

  async update(id: string, data: Car): Promise<void | Car | null> {
    CarService.validateIdLength(id);

    if (Object.values(data).every((value) => !value)) {
      throw new BadRequestError('The data to update must be provided');
    }

    const updatedCar = await this._model.update(id, data);

    if (!updatedCar) throw new NotFoundError(this._notFoundMessage);

    return updatedCar;
  }

}

export default CarService;
