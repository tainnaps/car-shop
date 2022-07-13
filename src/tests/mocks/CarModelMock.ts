import { Car } from '../../interfaces/CarInterface';
import { Model } from '../../interfaces/ModelInterface';
import { CARS_MOCK } from './CarMock';

class CarModelMock implements Model<Car> {
  async create(data: Car): Promise<Car> {
    return data;
  }
  async read(): Promise<Car[]> {
    return CARS_MOCK;
  }
  async readOne(id: string): Promise<Car | null> {
    throw new Error('Method not implemented.');
  }
  async update(id: string, data: Car): Promise<Car | null> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<Car | null> {
    throw new Error('Method not implemented.');
  }
}

export default CarModelMock;
