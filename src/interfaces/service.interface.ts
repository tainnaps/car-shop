export interface Service<T> {
  create(data: T): Promise<T | void>;
  read(): Promise<T[]>;
  readOne(id: string): Promise<T | null | void>;
  update(id: string, data: T): Promise<T | null | void>;
  delete(id: string): Promise<T | null | void>;
}
