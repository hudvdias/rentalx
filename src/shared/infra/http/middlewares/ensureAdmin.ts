import { UsersRepository } from "@/modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@/shared/errors/AppError";
import { Handler } from "express";

export const EnsureAdmin: Handler = async (request, response, next) => {
  const { id } = request.user;
  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);
  if (!user.admin) throw new AppError("You do not have permission.");
  return next();
};
