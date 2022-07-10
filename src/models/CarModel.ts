import { Model as MongooseModel, model as createModel } from 'mongoose';
import MongoModel from './MongoModel';
import { Car } from '../interfaces/CarInterface';
import carSchema from './schemas/CarMongooseSchema';
import { Model } from '../interfaces/ModelInterface';

class CarModel extends MongoModel<Car> implements Model<Car> {
  constructor(mongooseModel: MongooseModel<Car> = createModel(
    'Cars',
    carSchema,
  )) {
    super(mongooseModel);
  }
}

export default CarModel;
