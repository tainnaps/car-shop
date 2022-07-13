import { expect } from 'chai';
import CarModelMock from '../../mocks/CarModelMock';
import CarService from '../../../services/CarService';
import { NEW_CAR_MOCK } from '../../mocks/CarMock';

describe('CarService', () => {
  const carModelMock = new CarModelMock();
  const carService = new CarService(carModelMock);

  describe('when creating a new car', () => {
    describe('with valid data', () => {
      it('should resolve the promise with the new car data', async () => {
        const createdCar = await carService.create(NEW_CAR_MOCK);

        expect(createdCar).to.be.deep.equal(NEW_CAR_MOCK);
      });
    });
  });
});
