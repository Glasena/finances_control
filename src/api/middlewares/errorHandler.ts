import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.status).json({
      status: "Error",
      message: error.message,
    });
  }

  return res.status(500).json({
    status: "Error",
    message: "Internal Server Error",
  });
};

export default errorHandler;
