import { NextFunction, Request, Response } from "express";

export const asyncErrorHandler = (controller: Function) => {
    return (req: Request, res:Response, next?:NextFunction) => {
      controller(req, res, next).catch(next);
    };
  };
  