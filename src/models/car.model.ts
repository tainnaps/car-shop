import { Model as MongooseModel, model as createModel } from 'mongoose';
import MongoModel from './mongo.model';
import { Car } from '../interfaces/car.interface';
import carSchema from './schemas/car.mongoose.schema';
import { Model } from '../interfaces/model.interface';

class CarModel extends MongoModel<Car> implements Model<Car> {
  constructor(mongooseModel: MongooseModel<Car> = createModel(
    'Cars',
    carSchema,
  )) {
    super(mongooseModel);
  }
}

export default CarModel;
