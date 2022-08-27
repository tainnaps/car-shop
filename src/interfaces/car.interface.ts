import { Vehicle } from './vehicle.interface';

export interface Car extends Vehicle {
  doorsQty: number;
  seatsQty: number;
}
