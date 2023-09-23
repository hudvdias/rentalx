import { Repository, getRepository } from "typeorm";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "@/shared/errors/AppError";
import { User } from "../../infra/typeorm/entities/User";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export class AuthenticateUserUseCase {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async execute(data: IRequest): Promise<IResponse> {
    const { email, password } = data;
    const user = await this.repository.findOne({ where: { email } });
    if (!user) throw new AppError("Email not registered.");
    const passwordMatches = await compare(password, user.password);
    if (!passwordMatches) throw new AppError("Wrong password.");
    const token = sign({}, "bc7afcb7eef3ccfc1fc6547ed5fcde34", { subject: user.id, expiresIn: "7d" });
    return {
      user: {
        email: user.email,
        name: user.name,
      },
      token,
    };
  }
}
