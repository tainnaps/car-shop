import { expect } from 'chai';
import CarModelMock from '../../mocks/CarModelMock';
import CarService from '../../../services/CarService';
import { CAR_MOCK, CARS_MOCK } from '../../mocks/CarMock';

describe('CarService', () => {
  const carModelMock = new CarModelMock();
  const carService = new CarService(carModelMock);

  describe('when creating a new car', () => {
    describe('with valid data', () => {
      it('should resolve the promise with the new car data', async () => {
        const createdCar = await carService.create(CAR_MOCK);

        expect(createdCar).to.be.deep.equal(CAR_MOCK);
      });
    });
  });

  describe('when reading all cars', () => {
    it('should resolve the promise with all the cars', async () => {
      const cars = await carService.read();

      expect(cars).to.be.deep.equal(CARS_MOCK);
    });
  });
});
