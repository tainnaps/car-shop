import { isValidObjectId, Model as MongooseModel } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  protected _mongooseModel: MongooseModel<T>;

  constructor(mongooseModel: MongooseModel<T>) {
    this._mongooseModel = mongooseModel;
  }

  async create(data: T): Promise<T> {
    return this._mongooseModel.create({ ...data });
  }

  async read(): Promise<T[]> {
    return this._mongooseModel.find();
  }

  async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;

    return this._mongooseModel.findOne({ _id: id });
  }

  async update(id: string, data: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;

    return this._mongooseModel.findOneAndUpdate(
      { _id: id },
      { ...data },
      { new: true },
    );
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;

    return this._mongooseModel.findOneAndDelete({ _id: id });
  }
}

export default MongoModel;
