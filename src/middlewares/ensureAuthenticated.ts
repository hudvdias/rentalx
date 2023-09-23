import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/typeorm/UsersRepository";
import { AppError } from "../errors/AppError";

export const ensureAuthenticated = async (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError("Must be authenticated.", 401);
  const [_, token] = authHeader.split(" ");
  try {
    const { sub: userId } = verify(token, "bc7afcb7eef3ccfc1fc6547ed5fcde34");
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(userId as string);
    if (!user) throw new AppError("User dows not exists.", 401);
    next();
  } catch {
    throw new AppError("Invalid token.", 401);
  }
};
