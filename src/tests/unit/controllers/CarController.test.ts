import { Request, Response, NextFunction } from 'express';
import { expect } from 'chai';
import Sinon, { SinonStub } from 'sinon';
import CarController from "../../../controllers/CarController";
import { CAR_MOCK } from '../../mocks/CarMock';
import CarServiceMock from "../../mocks/CarServiceMock";

describe('CarController', () => {
  const carServiceMock = new CarServiceMock();
  const carController = new CarController(carServiceMock);

  describe('when creating a new car', () => {
    const req = {} as Request;
    const res = {} as Response;
    let next: NextFunction;

    before(async () => {
      req.body = CAR_MOCK;
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns(res);
      next = Sinon.stub().returns({});

      await carController.create(req, res, next);
    });

    describe('with valid data', () => {
      it('should return status 201', () => {
        expect((res.status as SinonStub).calledWith(201)).to.be.true;
      });

      it('should return a json with the created data', () => {
        expect((res.json as SinonStub).calledWith(CAR_MOCK)).to.be.true;
      });
    });
  });
});
