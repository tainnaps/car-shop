import CustomError from './custom.error';

class BadRequestError extends CustomError {
  constructor(message: string) {
    super(message, 400);
  }
}

export default BadRequestError;
