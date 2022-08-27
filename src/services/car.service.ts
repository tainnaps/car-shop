import { Car } from '../interfaces/car.interface';
import { Service } from '../interfaces/service.interface';
import CarModel from '../models/car.model';
import GenericService from './generic.service';
import carValidationSchema from '../validations/car.validation.schema';
import BadRequestError from '../errors/badRequest.error';
import { Model } from '../interfaces/model.interface';
import NotFoundError from '../errors/notFound.error';

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

  async delete(id: string): Promise<void | Car | null> {
    CarService.validateIdLength(id);

    const deletedCar = await this._model.delete(id);

    if (!deletedCar) throw new NotFoundError(this._notFoundMessage);
  }
}

export default CarService;
