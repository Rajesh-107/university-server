/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
  // res.status(500).send('Internal Server Error');

  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found Route',
    error: '',
  });
};

export default notFoundRoute;
