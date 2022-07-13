import { model as createModel } from 'mongoose';
import carSchema from '../../../models/schemas/CarMongooseSchema';
import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import { CAR_MOCK } from '../../mocks/CarMock';
import CarModel from '../../../models/CarModel';

describe('CarModel', () => {
  const carMongooseModel = createModel('Cars', carSchema);

  describe('when creating a new car', () => {
    before(() => {
      sinon.stub(carMongooseModel, 'create').resolves(CAR_MOCK);
    });

    after(() => {
      (carMongooseModel.create as SinonStub).restore();
    });

    it('should resolve the promise with the new car data', async () => {
      const newCar = await new CarModel(carMongooseModel).create(CAR_MOCK);

      expect(newCar).to.be.an('object');
      expect(newCar).to.be.deep.equal(CAR_MOCK);
    });
  });
});
