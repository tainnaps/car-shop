import { Car } from '../interfaces/CarInterface';
import { Service } from '../interfaces/ServiceInterface';
import CarModel from '../models/CarModel';
import GenericService from './GenericService';
import carValidationSchema from '../validations/CarValidationSchema';
import BadRequestError from '../errors/BadRequestError';
import { Model } from '../interfaces/ModelInterface';

class CarService extends GenericService<Car> implements Service<Car> {
  constructor(model: Model<Car> = new CarModel()) {
    super(model);
  }

  async create(data: Car): Promise<void | Car> {
    const validationResult = carValidationSchema.safeParse(data);

    if (!validationResult.success) {
      const errors = validationResult.error.issues;
      throw new BadRequestError(errors[0].message);
    }

    return this._model.create({ ...data });
  }
}

export default CarService;
