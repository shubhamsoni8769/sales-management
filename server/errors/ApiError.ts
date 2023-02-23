export class BadRequestError extends Error {
    status: string;
    statusCode: number;
    constructor(message: string) {
      super(message);
      this.statusCode = 400;
      this.status = 'Wrong Input';
      Error.captureStackTrace(this);
    }
  }
  