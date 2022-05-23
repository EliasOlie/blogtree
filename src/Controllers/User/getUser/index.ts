import { PrismaUserImplementation } from "../prismaImplementation";
import { PrismaAdapter } from "../../../infra/prismaAdapter";
import { GetUserCase } from "./getUseCase";
import { GetUserController } from "./getUserController";

const getUserCase = new GetUserCase(new PrismaUserImplementation(PrismaAdapter))
const getUserController = new GetUserController(getUserCase)

export {getUserCase, getUserController}