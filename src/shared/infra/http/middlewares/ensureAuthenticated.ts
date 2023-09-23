import { Handler } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "@/shared/errors/AppError";
import { UsersRepository } from "@/modules/accounts/infra/typeorm/repositories/UsersRepository";

export const ensureAuthenticated: Handler = async (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError("Must be authenticated.", 401);
  const [_, token] = authHeader.split(" ");
  try {
    const { sub: userId } = verify(token, "bc7afcb7eef3ccfc1fc6547ed5fcde34");
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(userId as string);
    if (!user) throw new AppError("User dows not exists.", 401);
    request.user = { id: userId as string };
    next();
  } catch {
    throw new AppError("Invalid token.", 401);
  }
};
