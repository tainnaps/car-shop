import { Model } from '../interfaces/ModelInterface';
import { Service } from '../interfaces/ServiceInterface';

abstract class GenericService<T> implements Service<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  async create(data: T): Promise<T | void> {
    return this._model.create({ ...data });
  }

  async read(): Promise<T[]> {
    return this._model.read();
  }

  async readOne(id: string): Promise<void | null | T> {
    return this._model.readOne(id);
  }

  async update(id: string, data: T): Promise<void | null | T> {
    return this._model.update(id, data);
  }

  async delete(id: string): Promise<void | null | T> {
    return this._model.delete(id);
  }
}

export default GenericService;
