import { Service } from '../../interfaces/ServiceInterface';
import { Car } from '../../interfaces/CarInterface';

class CarServiceMock implements Service<Car> {
  async create(data: Car): Promise<void | Car> {
    return data;
  }
  async read(): Promise<Car[]> {
    throw new Error('Method not implemented.');
  }
  async readOne(id: string): Promise<void | Car | null> {
    throw new Error('Method not implemented.');
  }
  async update(id: string, data: Car): Promise<void | Car | null> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void | Car | null> {
    throw new Error('Method not implemented.');
  }

}

export default CarServiceMock;
